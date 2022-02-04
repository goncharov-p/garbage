const express = require('express');
const _ = require('underscore');
const app = express();


app.get('/rest',(req,res)=>{
  let t = req.query;
  let num = t.fullName;
  num = Number(num);
  const arr = [];
  let max = 1000;
  let min = 0;
  for(let i = 0; i < num; i++){
    arr[i] = getRandomIntInclusive(0, 1000);
    };
    function getRandomIntInclusive(min, max) {//Почему-то стрелочная запись не работает
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log(arr);
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});