const express = require('express');
const app = express();

app.post('/createTask', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const body = req.body;
  const test = new Test({
      test: body.test,
    });
    task.save().then(result => {
      res.send(result);
    }).catch(err => console.log(err));
  
})

app.listen(8000, () => {
  console.log('App listening on port 8000')
})

