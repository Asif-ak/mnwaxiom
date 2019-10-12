const config=require('config');
const helper=require('../helper/helper')
const mongoose = helper.mongoose;

// const dburl =config.get('DBURL');
const MONGO_ATLAS=config.get('MONGO_ATLAS');

const dbconnect=async()=> {
    try {
        await mongoose.connect(MONGO_ATLAS, {
            useNewUrlParser: true,
            useCreateIndex: true,
            // useFindAndModify: false,
            useUnifiedTopology: true
        });
         console.log('MongoDB Connected Successfully!')
     } catch (error) {
         console.log('Unable to connect:', error.message);
     }
    
}


// Connecting to the database
module.exports=dbconnect;