const mongoose = require('mongoose');

const URl ='mongodb+srv://dbadmin:dbadmin@cluster0.ueq2x2a.mongodb.net/?retryWrites=true&w=majority'; 

const connectDB = async()=> {
    await mongoose.connect(URl,{useUnifiedTopology:true,useNewURlParser:true});
    console.log('db connected.....!');
};

module.exports = connectDB;