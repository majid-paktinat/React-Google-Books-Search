require('dotenv').config(); // --> process.env
const express = require( 'express' );
const path =require('path');
// const fs = require('fs');
const orm = require( './db/orm.mongoose' );

const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooksDB";

const app = express();
// const upload = require('multer')({ dest: 'public/uploads/' });

app.use( express.static('client/build') );
// app.use( express.static('client/') );

app.use( express.urlencoded({ extended: false }) );

// app.get('/api/product/list', async function( req,res ){
//     const products = JSON.parse( fs.readFileSync( "db/products.json" ) );

//     res.send( products );
// });

// app.get('/api/product/:id', async function( req,res ){
//     // parse the :id and serve ONE product.
//     const products = JSON.parse( fs.readFileSync( "db/products.json" ) );
//     const id = req.params.id;

//     const product = products.filter( product=>product.id===id )[0]

//     res.send( product );
// });

// app.post('/api/product/:id/review', async function( req,res ){

// });

// app.post('/api/user/registration', async function( req,res ){
//     const userData = req.body;
//     console.log( `[POST: /api/user/registration] userData: `, userData );
    
//     const registerResult = await orm.registerUser( userData );
//     res.send( registerResult );
// })



app.get('*', function( req,res ){
    console.log("redirect to index page!");
    res.sendFile( path.join(__dirname, '/client/build/', 'index.html') );
});


app.listen( PORT, function(){
    console.log( `[googlebooks server] Running, http://localhost:${PORT}` );
 });