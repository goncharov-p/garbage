let lastname=[];
let input=null;
let inputLast = null;
let valueInput='';
let valueInputLast='';


window.onload = function init () {
    input =document.getElementById('add-sum');
    input.addEventListener('change',updateValue);
    inputLast =document.getElementById('add-sum-Last');
    inputLast.addEventListener('change',updateValueLast);
    sessionStorage.setItem('tasks',JSON.stringify(lastname));
}

updateValue=(event)=>{
    valueInput=event.target.value;
}
updateValueLast=(event)=>{
    valueInputLast=event.target.value;
}

onClickButton = () => {
    if(valueInputLast&&valueInput){
    lastname.push({
        text: valueInput,
        textLast: valueInputLast
    });
    sessionStorage.setItem('tasks',JSON.stringify(lastname));
    valueInput = '';
    valueInputLast = '';
    input.value = '';
    inputLast.value = '';}else{
        alert('Заполните все поля')
    }};

  

  deleteAll=()=>{
      sessionStorage.clear();
      lastname = [];
  }