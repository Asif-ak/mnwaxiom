module.exports = {
    PORT: process.env.PORT || 30001,
    express: require('express'),
    mongoose : require('mongoose'),
    http: require('http'),
    parser:require('body-parser'),
    Joi: require('@hapi/joi'),
    bcrypt:require('bcryptjs'),
    jwt : require('jsonwebtoken')
}