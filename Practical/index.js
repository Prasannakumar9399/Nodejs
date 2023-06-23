const express = require('express');
const middleware = require('./middleware')
const app = express();


// app.use(reqFilter);  for all routes i.e application level middleware.

app.get("/", (req, res) => {
  res.send(JSON.stringify({ "name": "PMJ" }));
})

app.get('/users', middleware.reqFilter, (req, res) => {
  res.send("Get All User");
});

app.get('/about', (req, res) => {
  res.send("Welcome to about us page");
})



app.listen('5000', () => {
  console.log("Server started at port 5000");
})