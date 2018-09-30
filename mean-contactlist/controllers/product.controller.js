const Product=require('../models/product.model');

exports.test=function(req,res){
    res.send("Test signal from the product controller");
}
