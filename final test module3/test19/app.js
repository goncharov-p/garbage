const express = require('express');
const bodyParser = require('body-parser');
const _ = require("underscore");
const app = express();
app.use(bodyParser.json());


app.get('/', (req, res) => {
  const test = req.body.f;
  const arr = [];
  let r = 0;
  for(let i=0;i!==3;i++){  
       r =_.random(0,1000);
       r = r*2;
       arr.push(r);
  }
  console.log(arr)

})

app.listen(8000, () => {
  console.log('App listening on port 8000')
})
