const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/REST_API")
.then(()=>{
    console.log("database connected Successfully")
})
.catch((err)=>console.log(err))


module.exports = mongoose;
