// "stop": "node server.stop.js"
const PORT = require('./helper/port.js');
const port =PORT.PORT;
const io = require('socket.io-client');
const socketClient = io.connect(`http://localhost:${port}`); // Specify port if your express server is not using default port 80

socketClient.on('connect', () => {
  socketClient.emit('npmStop');
  setTimeout(() => {
    process.exit(0);
  }, 1000);
});