fun=()=>{
  alert("Блаааа")
}

window.onload=function init (){                       //событие window.onload наступает когда все элементы загруженны на страницу
  const input=document.getElementById('add-task')     //создаем переменную и присваиваем ей значение которое содержится в элементу по id
  input.addEventListener('change',updateValue)        //вешаем слушатель на переменную и при изменении - выполняется код из функции - addEventListener(событие,обработчик)
  input.addEventListener('keyup',updateValue1)
  input.addEventListener('keydown',updateValue2)
  
}


updateValue=()=>{
  console.log('value',input);    //событие.ссылка.значение  ссылается на данные при этом событии
}

updateValue1=(event)=>{
  console.log(event.target.value);
}

updateValue2=(event)=>{
  console.log('value-down',event.target.value);
}