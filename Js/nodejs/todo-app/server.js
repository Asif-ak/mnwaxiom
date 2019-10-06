const db = require('./helper/dbConnet');
const config= require('./helper/config');
const todoRoutes=require('./routes/todoRoutes');
const app=config.express();
// parse requests of content-type - application/x-www-form-urlencoded
app.use(config.parser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(config.parser.json());

app.use(config.express.json({extended:false}))

app.use('/api/v1/todo',todoRoutes)
// catch 404 not found
app.use((req,res,next)=>{
    res.status(404).send("Route not found");
});


const server = config.http.createServer(app);

let PORT=config.PORT;

server.listen(PORT,()=>{`server started at ${PORT}`});
db.connect();
// app.listen(PORT,()=>{`server started at ${PORT}`})