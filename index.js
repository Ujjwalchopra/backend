require('dotenv').config()
const express = require('express');

const app= express();

const port= 4000;

app.get('/', (req,res) => {
    res.send("hello home");
})

app.get('/login', (req,res) => {
    res.send("Kindly login");
})

app.get('/youtube', (req,res)=> {
    res.send("<h1>Welcome to youtube.</h1>")
})

app.listen(process.env.PORT,() => {
    console.log(`server running on ${port}`)
})
