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
    name  : "Hydra",
    heads : 3,
    mythology : "greek"

    
  },
  {
    name  : "Unicorn",
    heads : 1,
    mythology : "Scotland"

  },
  {
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



app.listen(8011,()=>{
    console.log('http://localhost:8011');
});