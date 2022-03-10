const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const importData = require('./data.json')


app.get('/',(req,res)=>{
    res.send(importData)
})

app.listen(port , ()=>{
    console.log(`running on port ${port}`)
})