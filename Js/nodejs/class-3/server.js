const express = require('express');
const app = express();



const PORT = 3001 || process.env.PORT;
app.listen(PORT,()=>console.log("Server Started !!"));