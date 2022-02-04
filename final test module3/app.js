const express = require('express');
const bodyParser = require('body-parser');
const _ = require("underscore");
const app = express();
app.use(bodyParser.json());

app.post('/createBook', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const body = req.body;
  const book = new Book({
    year: body.year,
    author:body.author,
    title:body.title,
    publishingHouse: body.publishingHouse
    });
    task.save().then(result => {
      res.send(result);
    }).catch(err => console.log(err));
  
})


app.patch('/updateBook', (req, res) => {
  const body = req.body;
  const id = req.body.id;
  const filter = { _id: id };

  Book.updateOne(filter, {
      $set: { year: body.year,
        author:body.author,
        title:body.title,
        publishingHouse: body.publishingHouse
      }
      }).then(result => {
        res.send(result)
        }
      );
});

app.delete('/deleteBook/', (req, res) => {
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
