// console.log('nothing but JavaScript');

require('dotenv').config()

const express = require('express') 

// import express from "express";
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
}) 

app.get('/login', (req,res) => {
    res.send('<h1>Hi Taufeeq</h1>')
    console.log('nothing');
})