// This is for creating a server using express
// Imports
// Import express from 'express';
const express = require('express');
// Axios
const axios = require('axios');
const cors = require('cors');
// File System management
const fs = require('fs');

const dotenv = require('dotenv');
dotenv.config();

const app = express();
// Run express when this page is rendered/loaded

//const res = require('express/lib/response');
// Middlewares
// Middleware for CORS
app.use(cors());
// Middleware for JSON data recieving
app.use(express.json());


// Data
const beasts = require('./Data/beasts.json');

// Routes

// Route 3
app.get('/beasts',(req,res)=>{
  if(beasts){
    res.send(beasts);
  }else{
    res.send("No data");
  }
    
});


// Queries
app.get('/beasty',(req,res)=>{
  //http://localhost:8011/beasty?name=something
  const _name = req.query.name;
  res.send(beasts.filter(items => items.description === _name));
});

// To get by query
app.get('/beast',(req,res)=>{
  const _beast = req.query.name;

  const reqData = beasts.filter(items => items.name === _beast);

  res.send(reqData);
});



// Route for posting
app.post('/beasts',(req,res)=>{

  const _id = beasts.length+1;

  // Adding two objects
  const newDataToBeAddedToBeasts = Object.assign({id:_id},req.body); 

  // Adding to the array
  beasts.push(newDataToBeAddedToBeasts);

  console.log(typeof(beasts));
  // Converting the object to an JSON
  const neArray = JSON.stringify(beasts);

  // Methods to write the data
  // fs.writeFile(arg1,arg2,arg3*);
  // arg1 is the path of the data
  // arg2 will be the new data that has to be added
  // arg3 which is a function which gets triggered when the method is called
  fs.writeFile('./Data/beasts.json',neArray,()=>{
    // Final step
      res.send(neArray);
  });
});

// Edit
app.patch('/beast/:id',(req,res)=>{
  // Get the ID
  const _id = parseInt(req.params.id);

  const _name = req.body.name;
  const _heads = req.body.heads;
  const _mythology = req.body.mythology;

  // Get the index
  const _index = _id-1;

  // Change the thing
  beasts[_index].name = _name;
  beasts[_index].heads = _heads;
  beasts[_index].mythology = _mythology;


  // write to the file
  fs.writeFile('./Data/beasts.json',JSON.stringify(beasts),()=>{
    res.send(beasts);
  });

  
});


app.listen(8011,()=>{
    console.log('http://localhost:8011');
});