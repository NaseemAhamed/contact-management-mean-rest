const express=require('express');
const bodyParser=require('body-parser');
const product = require('./routes/product.route');

 const app=express();
 app.use('/products',product);

 const port = 3000;
 app.listen(port,()=> {console.log('The server is up and running on port number ' + port)});