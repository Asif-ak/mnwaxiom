const db = require('./helper/dbConnet');
const helper= require('./helper/helper');
const todoRoutes=require('./routes/todoRoutes');
const app=helper.express();
const parser=helper.parser;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(helper.parser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(helper.parser.json());

app.use(helper.express.json({extended:false}))


app.use('/api/v1/todo',todoRoutes)
// catch 404 not found
app.use((req,res,next)=>{
    res.status(404).send("Route not found");
});


const server = helper.http.createServer(app);

let PORT;
try {
    PORT=helper.PORT;
} catch (error) {
    console.log(error);
}

server.listen(PORT,()=>{`server started at ${PORT}`});
// db.connect();
db();
// app.listen(PORT,()=>{`server started at ${PORT}`})