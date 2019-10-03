const express = require('express');
const app = express();
const http = require('http');
const PORT = require('./helper/port.js');
const student =require('./routes/student.js')
// middleware
app.use(express.json({extended:false}));
app.use('/api/v1/student',student);

const port=PORT.PORT;

const server=http.createServer(app);
server.listen(port,()=>{console.log(`"Server Started at ${port}!!"`)});

const io = require('socket.io')(server);
io.on('connection', (socketServer) => {
  socketServer.on('npmStop', () => {
    process.exit(0);
  });
});

