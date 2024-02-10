const Product = require("../models/product"); //model 

const getAllProducts = async(req,res) =>{
    //for filter company
    const {company,name,feature,sort,select} = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = company;
    }

    if(name){
        queryObject.name = { $regex: name , $options: "i" } // i represent incase sensitive 
    }
    
    if(feature)
    {
        queryObject.feature = feature;
    }

    let apidata = Product.find(queryObject);
    
    if(sort){
        let sortfix = sort.split(",").join(" ");
        apidata = apidata.sort(sortfix);
    }
    if(select){
        let selectfix = select.split(",").join(" ");
        apidata = apidata.select(selectfix);
    }
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;

    let skip = (page-1)*limit;

    apidata = apidata.skip(skip).limit(limit);
   
    console.log(queryObject);

    //by using this if we search anything after company it must return data insted empty array
    const mydata =  await apidata

    res.status(200).json({mydata, nbHits: mydata.length});
}

const createProduct = async (req,res,next) =>{
    console.log(req.body.name);
    await Product.create({
        name:req.body.name , 
        price:req.body.price , 
        feature:req.body.feature , 
        rating:req.body.rating ,
        company:req.body.company
    })
    .then((result)=>res.json({message:"New Product is Added",data:result}))
    .catch(err => res.json({message:"Not Add any Product",err}));
}

const deleteProduct = async (req,res,next) => {
    await Product.findByIdAndDelete(req.body.id)
    .then(result => res.json({message : "Product is Deleted",result}))
    .catch(err => res.json({message:"Product is not Deleted"}));
}

const updateProduct = async (req,res,next) => {
    const updatedData = req.body;
    await Product.findByIdAndUpdate(req.body.id,updatedData)
    .then(result => res.json({message:"Product Data is updated"}))
    .catch(err => res.json('Product is not update',err));
}

const getAllProductsTesting = async(req,res) =>{
    const mydata =  await Product.find(req.query)
    // const mydata =  await Product.find(req.query).select("name price")
    // const mydata =  await Product.find(req.query).sort("name price")
    res.status(200).json({mydata});
    // res.status(200).json({msg : "I am getAllProductsTesting "});
}

module.exports = { getAllProducts , getAllProductsTesting ,createProduct , updateProduct , deleteProduct};
