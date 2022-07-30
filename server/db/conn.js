const mongoose = require('mongoose');
const config = require('config')

const DB = process.env.DATABASE;
const dbConfig = config.get('eSamud.dbConfig.dbName');
mongoose.connect(dbConfig ,{
    useNewURLParser: true,
    useUnifiedTopology: true, 
}).then(()=>{console.log('connected');
}).catch(err=>{console.log('not connected'+err)});