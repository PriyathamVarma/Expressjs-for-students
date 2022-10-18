// This is for creating a server using express
// Imports
// Import express from 'express';
const express = require('express');
const app = express();// Run express when this page is rendered/loaded

const cors = require('cors');
const res = require('express/lib/response');
app.use(cors());


// Data
const beasts = [
  {
    id: 1,
    name  : "Hydra",
    heads : 3,
    mythology : "greek"

    
  },
  {
    id: 2,
    name  : "Unicorn",
    heads : 1,
    mythology : "Scotland"

  },
  {
    id: 3,
    name  : "Dragon",
    heads : 100,
    mythology : "English"

  },

  // How to get the data here from the forms
];

// Routes
app.get('/',(request,response)=>{
    
    response.send('<h1>Hello</h1>');

});

// Route 2
app.get('/v',(req,res)=>{

    res.send('<h1>V is the best </h1>');

});

// Route 3
app.get('/beasts',(req,res)=>{
    res.json(beasts);
});

// Route 4 --> getting beasts by single record --> params
app.get('/beasts/:id',(req,res)=>{

    const id = parseInt(req.params.id);
    //console.log(typeof(id));

    //Using array filter method to get th exact data
    res.send(beasts.filter(items => items.id === id));

});


// Route 5 --> To get the query info from the URL --> query
app.get('/beast',(req,res)=>{

    //console.log(req.query);
    //http://localhost:8011/beast?name=Hydra

    const name = req.query.name;
    res.send(beasts.filter(item => item.name === name));


});




app.listen(8011,()=>{
    console.log('http://localhost:8011');
});