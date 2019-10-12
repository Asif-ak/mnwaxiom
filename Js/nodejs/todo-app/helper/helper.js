module.exports = {
    PORT: process.env.PORT || 30001,
    express: require('express'),
    mongoose : require('mongoose'),
    http: require('http'),
    parser:require('body-parser')
}