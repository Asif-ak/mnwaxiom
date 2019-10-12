// const config =require('./config');
const config=require('config');
const helper=require('../helper/helper')
const mongoose = helper.mongoose;

const dburl =config.get('DBURL');

const dbconnect=async()=> {
    try {
        await mongoose.connect(dburl, {
             useNewUrlParser: true,
             useCreateIndex: true,
             useFindAndModify: true,
             useUnifiedTopology: true
         });
         console.log('MongoDB Connected Successfully!')
     } catch (error) {
         console.log('Unable to connect:', error.message);
     }
    
}


// Connecting to the database
module.exports=dbconnect;