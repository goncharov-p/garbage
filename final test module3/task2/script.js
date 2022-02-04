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

  const keyName = "asc";

  const fun = (arr,keyName) =>{
      if(keyName === "asc"){
    res  = _.sortBy(arr, (num) => num['age']);
    return res;
  }else{
    res  = _.sortBy(arr, (num) => num['age']).reverse();
    return res;
  }
  }
 
  console.log(fun(arr,keyName))