const helper = require('../helper/helper');
const config = require('config');

const userModel = require('../models/usermodel');

const JWT_SECRET = process.env.JWT_SETRET || config.get('JWT_SECRET');

module.exports = async (req, res, next)=>{
    const token = req.header('token');

    if(!token)
    {
        return res.status(401).json({ msg: 'No token, authorization denied', success: false });
    }
    try {
        const decoded = await helper.jwt.decode(token,JWT_SECRET);
        const existinguser =await userModel.findById(decoded.user.id);
        if(!existinguser){
            return res.status(401).json({
                success: false,
                message: "Token is not valid"})
        }
        req.user = decoded.user;
        next();
    } catch (error) {
        console.log('Error:', error.message);
        res.status(401).json({ message: 'OOPS !! something went wrong', success: false })
    }
}