const express = require('express');
const router = express.Router();

const { getAllProducts , getAllProductsTesting ,createProduct , updateProduct , deleteProduct} = require("../controllers/products");


// router.route("/").get(function)
router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
router.route("/create").post(createProduct);
router.route("/delete").delete(deleteProduct);
router.route("/update").put(updateProduct);

module.exports = router;