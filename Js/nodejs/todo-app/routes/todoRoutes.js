const helper = require('../helper/helper');
const router = helper.express.Router();
const todoModel = require('../models/todomodel');
const Joi = helper.Joi;
const auth = require('../middlewares/auth');

const paramsValidation = helper.Joi.object({
    title: Joi.string().required().min(1).max(50),
    description: Joi.string().required().min(1).max(500),
    isCompleted: Joi.bool()
})

// @route    GET api/v1/todo/get-tasks
// @desc     Get tasks
// @access   Private

router.post('/newtodo',auth, async (req,res,next)=>{
    const { title, description, isCompleted } = req.body;

    // validate api params
    const { error } = paramsValidation.validate({ title, description, isCompleted });
    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details[0].message
        });
    }

    // Create a Todo
    const todo = todoModel({
        title, description, createdBy: req.user.id
    });

    // Save Todo in the database
    // todo.save()
    // .then(data => {
    //     res.send(data);
    // }).catch(err => {
    //     res.status(500).send({
    //         message: err.message || "Some error occurred while creating the Todo."
    //     });
    // });

    
    try {
        let newTodo = await todo.save();
        res.status(201).send({response: "New TODO created with id: "+ newTodo.id});
        
    } catch (err) {
        if (err.name === 'MongoError' && err.code === 11000) {
            res.status(409).send(new MyError('Duplicate key', [err.message]));
          }
      
          res.status(500).send(err);
        }
    
})

// @route    GET api/v1/todo/get-tasks
// @desc     Get todos of logged-in user
// @access   Private

router.get('/getalltodo', auth,async (req,res)=>{
    try {
        const todos = await todoModel.find({ createdBy: { $in: req.user.id } }).populate('createdBy', { password: 0,createdAt:0,updatedAt:0,__v:0 });

        // not working
        // const todos = await todoModel.find({"createdBy":helper.mongoose.Schema.Types.ObjectId(`${req.user.id}`)});
        if (todos.length < 1) {
            return res.json({
                success: true,
                message: "You have not created any task yet!"
            });
        }
        return res.json({
            success:true,
            todos
        });
    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: error.message
        });
    }
 


    // try {
    //     let todo = await todoModel.find();
    //     res.send(todo);
        
    // } catch (err) {
    //     return res.status(500).send(err);
        
    // }
})

router.get('/getbyID/:todoID',async (req,res)=>{
    // todoModel.findById(req.params.todoID)
    // .then(todo => {
    //     if(!todo) {
    //         return res.status(404).send({
    //             message: "Todo not found with id " + req.params.todoID
    //         });            
    //     }
    //     res.send(todo);
    // }).catch(err => {
    //     if(err.kind === 'ObjectId') {
    //         return res.status(404).send({
    //             message: "Todo not found with id " + req.params.todoID
    //         });                
    //     }
    //     return res.status(500).send({
    //         message: "Error retrieving Todo with id " + req.params.todoID
    //     });
    // });
    try {
        let todo = await todoModel.findById(req.params.todoID);
        if(!todo){
            return res.status(404).send({
                message: "Todo not found with id " + req.params.todoID
            }); 
        }
        res.send(todo);
    } catch (err) {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Todo not found with id " + req.params.todoID
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Todo with id " + req.params.todoID
        });
    }
})

router.put('/updatetodobyID/:todoID', async (req,res)=>{
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Todo content can not be empty"
        });
    }

    // Find Todo and update it with the request body
    // todoModel.findByIdAndUpdate(req.params.todoID, {
    //     todoName: req.body.todoName || "Untitled Todo", 
    //     todoTask: req.body.todoTask,
    //     completedOn: req.body.completedOn
    // }, {new: true})
    // .then(todo => {
    //     if(!todo) {
    //         return res.status(404).send({
    //             message: "Todo not found with id " + req.params.todoID
    //         });
    //     }
    //     res.send(todo);
    // }).catch(err => {
    //     if(err.kind === 'ObjectId') {
    //         return res.status(404).send({
    //             message: "Todo not found with id " + req.params.todoID
    //         });                
    //     }
    //     return res.status(500).send({
    //         message: "Error updating Todo with id " + req.params.todoID
    //     });
    // });
    try {
        let todoupdate = await todoModel.findByIdAndUpdate(req.params.todoID, {
            todoName: req.body.todoName || "Untitled Todo", 
            todoTask: req.body.todoTask,
            completedOn: req.body.completedOn}, 
            {new: true})
        if(!todoupdate)
        {
            return res.status(404).send({
                message: "Todo not found with id " + req.params.todoID
            });
        } else{
            res.status(200).send(todoupdate);
        }
    } catch (err) {
        if (err.name === 'MongoError' && err.code === 11000) {
            res.status(409).send(new MyError('Duplicate key', [err.message]));
        }
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Todo not found with id " + req.params.todoID
            });                
        }
        return res.status(500).send({
            message: "Error updating Todo with id " + req.params.todoID
        });


    }
})

router.delete('/deletetodobyID/:todoID', async (req,res)=>{
    // todoModel.findByIdAndRemove(req.params.todoID)
    // .then(todo => {
    //     if(!todo) {
    //         return res.status(404).send({
    //             message: "Todo not found with id " + req.params.todoID
    //         });
    //     }
    //     res.send({message: "Todo deleted successfully!"});
    // }).catch(err => {
    //     if(err.kind === 'ObjectId' || err.name === 'NotFound') {
    //         return res.status(404).send({
    //             message: "Todo not found with id " + req.params.todoID
    //         });                
    //     }
    //     return res.status(500).send({
    //         message: "Could not delete Todo with id " + req.params.todoID
    //     });
    // });

    try {
        let todo = await todoModel.findOneAndRemove({_id:req.params.todoID});
        
        if(!todo){
            return res.status(404).send({
                message: "Todo not found with id " + req.params.todoID
            });
        }
        res.send({204:'Todo deleted successfully'});
        // res.status(204).send('Todo deleted successfully');
    } catch (err) {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Todo not found with id " + req.params.todoID
            });                
        }
        return res.status(500).send({
            message: "Could not delete Todo with id " + req.params.todoID
        });
    }

})
module.exports = router;