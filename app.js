
const express = require('express');
const app = express();


app.get('/', function (req, res) {
  
  // res.send(req.headers['user-agent'])
  res.send(req.get('User-Agent')); // other solution
 })

app.listen(3000, ()=>console.log("port 3000 ok...."))

