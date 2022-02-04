
let valueInputSum = '';

window.onload = function init() {
  inputTextSum = document.getElementById('add-sum');
  inputTextSum.addEventListener('change', updateValueSum);
}

updateValueSum = (event) => {
  valueInputSum = event.target.value;
}

onClickButton = () => {
  console.log(valueInputSum);
}

 
 