window.onload=function init (){                       //событие window.onload наступает когда все элементы загруженны на страницу
  const input=document.getElementById('add-task')     //создаем переменную и присваиваем ей значение которое содержится в элементу по id
  input.addEventListener('change',updateValue)        //вешаем слушатель на переменную и при изменении - выполняется код из функции - addEventListener(событие,обработчик)
    }


updateValue=(event)=>{
  console.log(event.target.value);    //событие.ссылка.значение  ссылается на данные при этом событии
}
