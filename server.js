const express = require('express');
const connectDB = require ('./DBConnection/connection');

const app = express();
connectDB();

app.use('/api/userModel', require('./Api/User'));
app.use(express.json({extended:false}));

const Port = process.env.Port || 3000;

app.listen(Port, ()=>
console.log('server started'));