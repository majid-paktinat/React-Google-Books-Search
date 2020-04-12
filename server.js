require('dotenv').config(); // --> process.env
const express = require( 'express' );
const path =require('path');
const axios = require('axios');
const bodyParser = require("body-parser");
// const fs = require('fs');
const orm = require( './db/orm.mongoose' );

const PORT = process.env.PORT || 8080;
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooksDB";

const app = express();
// const upload = require('multer')({ dest: 'public/uploads/' });

app.use( express.static('client/build') );
// app.use( express.static('client/') );

app.use( express.urlencoded({ extended: false }) );

// app.get('/api/product/list', async function( req,res ){
//     const products = JSON.parse( fs.readFileSync( "db/products.json" ) );

//     res.send( products );
// });

// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksDB", { useNewUrlParser: true });
// const db = require("./db/models");
// app.get("/books", async function (req, res) {
//     //const books = await orm.getBook("title")
//     const books = await fetch('https://www.googleapis.com/books/v1/volumes?q='+ ).then( result=>result.json() )


//     console.log(books);
//     res.send(books);
//   });

app.get('/api/books/:title', async function( req,res ){
    // parse the :id and serve ONE product.
    // const books = JSON.parse( fs.readFileSync( "db/products.json" ) );
    const title = req.params.title;

    console.log(escape(title))

    //const books = products.filter( product=>product.id===id )[0]

    // const books = await orm.getBook("title");
    const books = await axios.get('https://www.googleapis.com/books/v1/volumes?q='+ escape(title)) //+ "&key=AIzaSyBAzph4dcGUEI9hkcIh7XuZJzpBuNhEJ9s&projection=lite")
    .then(books => {
      console.log(books.data.items)
      res.json(books.data.items);
    })
    .catch(err => {
        console.log("error")
        res.json(err);
    });


});

app.use(bodyParser.json());
app.post('/api/books', async function( req,res ){
  // parse the :id and serve ONE product.
  // const books = JSON.parse( fs.readFileSync( "db/products.json" ) );
  // const bookobj = req.params.bookitem;
  const bookData = req.body;
      // console.log( `[POST: /api/user/registration] userData: `, userData );
      
      const Result = await orm.saveBook( bookData );
      res.send( Result );

  // console.log(req.body.mybook.booktitle)
  // req.body.mybook.booktitle
  // req.body.mybook.bookimageLinks 
  // req.body.mybook.bookinfoLink 
  // req.body.mybook.bookdescription 
  // req.body.mybook.bookauthors

  //const books = products.filter( product=>product.id===id )[0]

  // const books = await orm.getBook("title");
  // const books = await axios.get('https://www.googleapis.com/books/v1/volumes?q='+ escape(title)) //+ "&key=AIzaSyBAzph4dcGUEI9hkcIh7XuZJzpBuNhEJ9s&projection=lite")
  // .then(books => {
  //   console.log(books.data.items)
  //   res.json(books.data.items);
  // })
  // .catch(err => {
  //     console.log("error")
  //     res.json(err);
  // });

  // res.send({});

});

// app.post('/api/product/:id/review', async function( req,res ){

// });

// app.post('/api/user/registration', async function( req,res ){
//     const userData = req.body;
//     console.log( `[POST: /api/user/registration] userData: `, userData );
    
//     const registerResult = await orm.registerUser( userData );
//     res.send( registerResult );
// })



// const db = require( './db//models' );
// const mongoose = require('mongoose');
// mongoose.connect(`mongodb://localhost/googlebooksDB`, {useNewUrlParser: true});
// app.get("/books", (req, res) => {
//     db.Bookmodel.find({})
//       .then(dbBook => {
//         res.json(dbBook);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });


app.get('*', function( req,res ){
    console.log("redirect to index page!");
    res.sendFile( path.join(__dirname, '/client/build/', 'index.html') );
});


app.listen( PORT, function(){
    console.log( `[googlebooks server] Running, http://localhost:${PORT}` );
 });