const  express = require('express')
const app = express();
const port = process.env.PORT || 5000;

//connect with mongodb
const mongoose = require('./db/connect');

// path of router file
const product_routes = require("./routes/products");

// app.get('/' , (req,res)=>{
//     res.send("Hii I am live ");
// });


//  middleware or to set router
app.use("/", product_routes); //if we write in url like api/product then our routes will display

const start = async ()=>{
    try{
        await mongoose
        app.listen(port, ()=>{
            console.log(`app is running on port ${port} http://localhost:5000`);
        })
    }
    catch(err){
        console.log(err);
    }
}
start();