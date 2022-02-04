const express = require('express');
const app = express();

app.delete('/deleteTask/', (req, res) => {
  const id = req.query.id;
  if (id) {
    Task.deleteOne({ _id: id }).then(result => {
      res.send("Delete")
    })
  };
});

app.listen(8000, () => {
  console.log('App listening on port 8000')
})

