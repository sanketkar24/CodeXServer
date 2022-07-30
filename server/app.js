const mongoose = require('mongoose');
const dotenv = require("dotenv");
const express = require('express');
const app = express();
const config = require('config')

//const DB = 'mongodb+srv://kasrsanket:chin1234@cluster0.2r8f06a.mongodb.net/esamudstack?retryWrites=true&w=majority'
dotenv.config({path: './config.env' });
require('./db/conn');
//const User = require('./model/userSchema');

const PORT = process.env.PORT;

app.use(express.json());
//linked router
app.use(require('./router/auth'));

// await mongoose.connect(DB, {
//     useNewURLParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify:false
// }).then(()=>{
//     console.log('connection successful');
// }).catch((err)=> console.log('not connected'));

const middleware = (req, res, next) => {
    console.log('Middleware working');
    next()
}

app.get('/dashboard', (req,res)=>{
    res.send('This is the dashboard');
});

// app.get('/Login', middleware, (req,res)=>{
//     res.send('Hello world Login');
// });
const dbPort = config.get('eSamud.dbConfig.port');

app.listen(dbPort,() =>{
    console.log('server running on port no:'+dbPort);
})