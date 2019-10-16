const helper = require('../helper/helper');
const config = require('config')
const router =helper.express.Router();
const Joi =helper.Joi;

const userModel = require('../models/usermodel');

const JWT_SECRET = process.env.JWT_SETRET || config.get('JWT_SECRET');

const paramsValidation = helper.Joi.object({
    username: Joi.string().required().min(1).lowercase().trim(), // make sure u recieve clean username
    password: Joi.string().min(8).required().trim()
})

// @route POST api/v1/user/register
// @desc     Register user
// @access   Public

router.post('/register',async (req, res)=>{
    let {username, password}=req.body;

    try {
        const {error} =paramsValidation.validate({username,password});
        if (error)
        {
            return res.status(200).json({
                success: false,
                message: error.details[0].message
            })
        }
        let _user = await userModel.findOne({username})
        if (_user)
        {
            return res.status(400).json({
                success: false,
                message: "Username already exists"
            });
        }
        const newuser = new userModel({
            username,password
        })

        const salt = helper.bcrypt.genSalt(10);
        const hash = helper.bcrypt.hash(password,salt);

        newuser.password=hash;
        await newuser.save();

        // const payload ={
        //     user:{
        //         username,
        //         id:newuser.id
        //     }
        // }
        // const token = await helper.jwt.sign(payload,JWT_SECRET,{
        //     expiresIn:"1d"
        // });
        return res.json({
            success: true,
            token,
            message: "User registered successfully",
        });
    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: error.message
        });
        
    }
})
// @route    POST api/v1/user/login
// @desc     Login user
// @access   Public
router.post('/login', async (req, res)=>{
    let { username, password } = req.body;
    const { error } = apiParamsSchema.validate({ username, password });
    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details[0].message
        });
    }
    try {
        const user = await userModel.findOne({ username });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Please provide valid username"
            });
        }
        const isValidPassword = await helper.bcrypt.compare(password,user.password);
        if (!isValidPassword){
            return res.status(400).json({
                success: false,
                message: "Invalid password"
            });
        }
        const payload = {
            user:{
                username: user.username,
                id: user._id
            }
        }
        const token = await helper.jwt.sign(payload,JWT_SECRET,{
            expiresIn:"1d"
        });

        return res.json({
            success: true,
            token,
            username: user.username,
            _id: user._id
        })
    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: error.message
        });
    }
})

module.exports = router;