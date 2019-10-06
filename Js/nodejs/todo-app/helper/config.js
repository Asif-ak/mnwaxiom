module.exports = {
    dburl: 'mongodb://localhost:27017/todo-api',
    PORT: 30001 || process.env.PORT,
    express: require('express'),
    parser: require('body-parser'),
    mongoose : require('mongoose'),
    http: require('http')
}