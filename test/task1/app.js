const express = require('express');
const bodyParser = require('body-parser');
const underscore = require("underscore");
const app = express();
app.use(bodyParser.json());
app.use(underscore);

app.get('/', (req, res) => {
  const test = req.body;
  const name = test.split(' ');
  const nameOne = _.first(name[0]);
  const nameLast = _.first(name[1]);
  const nameInit = nameOne + nameLast;
})

app.listen(8000, () => {
  console.log('App listening on port 8000')
})

