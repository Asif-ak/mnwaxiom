const config = require('../helper/config');
const router = config.express.Router();
const todoModel = require('../models/todomodel');

router.post('/newtodo', async (req,res,next)=>{
    if(!req.body.content) {
        
        return res.status(400).send({
            message: "Todo content can not be empty"
        });
    }

    // Create a Todo
    const todo = todoModel({
        todoName: req.body.todoName || "Untitled Todo", 
        todoTask: req.body.todoTask
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

router.get('/getalltodo',async (req,res)=>{
    // todoModel.find()
    // .then(todos => {
    //     res.send(todos);
    // }).catch(err => {
    //     res.status(500).send({
    //         message: err.message || "Some error occurred while retrieving Todos."
    //     });
    // });
    try {
        let todo = await todoModel.find();
        res.send(todo);
        
    } catch (err) {
        return res.status(500).send(err);
        
    }
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
        let todo = await todoModel.findById(req.param.todoID);
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

router.put('/:todoID/:todoID', async (req,res)=>{
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

router.delete('/:todoID/:todoID', async (req,res)=>{
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
        let todo = todoModel.findByIdAndRemove(req.param.todoID);
        if(!todo){
            return res.status(404).send({
                message: "Todo not found with id " + req.params.todoID
            });
        }
        res.send(204).send(`Todo with id ${todo.todoID} deleted successfully`);
    } catch (error) {
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