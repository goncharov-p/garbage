let result=0;
let result2=0;
let t=0;

fun=()=>{
  result=10;
  console.log(result);
}

window.onload=function init (){                       //событие window.onload наступает когда все элементы загруженны на страницу
  const input=document.getElementById('add-task')     //создаем переменную и присваиваем ей значение которое содержится в элементу по id
  input.addEventListener('click',updateValue)        //вешаем слушатель на переменную и при изменении - выполняется код из функции - addEventListener(событие,обработчик) 
}


updateValue=(event)=>{
  result2=result2+2;
  console.log(result2);
}


window.onload=function init (){                       //событие window.onload наступает когда все элементы загруженны на страницу
  const input=document.getElementById('add-task-2')     //создаем переменную и присваиваем ей значение которое содержится в элементу по id
  input.addEventListener('click',updateValue)        //вешаем слушатель на переменную и при изменении - выполняется код из функции - addEventListener(событие,обработчик) 
}


updateValue=(event)=>{
  t++;
  if(t%2===0){
  result2=0;
  console.log(result2)}else{
    result2=10;
    console.log(result2);
  }
}
