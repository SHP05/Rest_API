const { name } = require("ejs");
const Product = require("../models/product"); //model 

const getAllProducts = async(req,res) =>{
    //for filter company
    const {company,name,feature,sort,select} = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = company;
    }

    //M. IMP
    //name filter - if we write any name similar data will show which name is same using regex
    if(name){
        queryObject.name = { $regex: name , $options: "i" } // i represent incase sensitive 
    }
    
    //same as above apply in feature
    if(feature)
    {
        queryObject.feature = feature;
    }

    let apidata = Product.find(queryObject);
    
    //sort
    if(sort){
        let sortfix = sort.split(",").join(" ");
        apidata = apidata.sort(sortfix);
    }


    //select field
    if(select){
        let selectfix = select.split(",").join(" ");
        apidata = apidata.select(selectfix);
    }


    //Pagination
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;

    let skip = (page-1)*limit;

    apidata = apidata.skip(skip).limit(limit);
    //formmula
    //page = 2;
    //limit = 3;
    //skip = (2-1)*3 = 3


    console.log(queryObject);

    //by using this if we search anything after company it must return data insted empty array
    const mydata =  await apidata


    // const mydata =  await Product.find(req.query)
    // const mydata =  await Product.find({})
    res.status(200).json({mydata, nbHits: mydata.length});
    // res.status(200).json({msg : "I am getAllProducts "});
}

const getAllProductsTesting = async(req,res) =>{
    const mydata =  await Product.find(req.query)
    // const mydata =  await Product.find(req.query).select("name price")
    // const mydata =  await Product.find(req.query).sort("name price")
    res.status(200).json({mydata});
    // res.status(200).json({msg : "I am getAllProductsTesting "});
}
module.exports = { getAllProducts , getAllProductsTesting };