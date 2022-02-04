const express = require('express');
const app = express();

app.patch('/updateTask', (req, res) => {
  const body = req.body;
  const id = req.body.id;
  const filter = { _id: id };

  Task.updateOne(filter, {
      $set: { value: body.value }
    }).then(result => {
        res.send(result)
      })})

app.listen(8000, () => {
  console.log('App listening on port 8000')
})

