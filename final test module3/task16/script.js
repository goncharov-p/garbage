const arr=[
    {
      name:'Ivan',
      age:28
    },
    {
      name:'egor',
      age:12
    },
    {
      name:'Petr',
      age:22
    },
  ];

  const keyName = "age";

  const fun = (arr,keyName) =>{
    res  = _.min(arr, (num) => num[keyName]);
    return res;
  }

  console.log(fun(arr,keyName));