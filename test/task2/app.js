const express = require('express');
const bodyParser = require('body-parser');
const underscore = require("underscore");
const app = express();
app.use(bodyParser.json());
app.use(underscore);

app.get('/', (req, res) => {
  const test = req.body;
  const max = 1000;
  const min = 0;
  const arr = [];
  for(let i=0;i!==test;i++){
    let random = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    arr.push(random);
  }
})

app.listen(8000, () => {
  console.log('App listening on port 8000')
})

