
const express = require('express');
const app = express();

app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true }))// for parsing application/x-www-form-urlencoded
app.get('/', function (req, res) {
   
    // res.json(req.headers['user-agent']);
    res.send(req.headers['user-agent'])
   
    
  })

app.listen(3000, ()=>console.log("port 3000 ok...."))

