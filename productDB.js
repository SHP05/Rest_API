const connectDB = require("./db/connect"); //database
const Product = require("./models/product"); //model

const ProductJson = require("./products.json"); //json file

const start = async() =>{
    try{
        await connectDB;
        //for delete perev data and again add all data of json file
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("success")
    }
    catch(error){
        console.log(error)
    }
}

start();