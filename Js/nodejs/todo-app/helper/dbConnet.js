const config =require('./config');

function dbconnect() {
    config.mongoose.Promise = global.Promise;
    return config.mongoose.connect(config.dburl,{
        useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to the database");    
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });
    
}


// Connecting to the database
exports.connect=dbconnect;