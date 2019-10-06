module.exports = {
    dburl: 'mongodb://localhost:27017/todo-api',
    PORT: process.env.PORT || 30010,
    express: require('express'),
    parser: require('body-parser'),
    mongoose : require('mongoose'),
    http: require('http')
}