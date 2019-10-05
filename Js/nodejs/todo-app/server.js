const express = require('express');
const http = require('http');
const app= express();
const server = http.createServer(app);
const PORT =require('./helper/port');
PORT=PORT.PORT;








// catch 404 not found
app.use((req,res,next)=>{
    res.status(404).send("Route not found");
});

server.listen(PORT,()=>{`server started at ${PORT}`});
