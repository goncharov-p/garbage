
let valueInputSum = 0;

window.onload = function init() {
  inputTextSum = document.getElementById('add-sum');
  inputTextSum.addEventListener('change', updateValueSum);
}

updateValueSum = (event) => {
  valueInputSum += 2;
}

onClickButton = () => {
  console.log(valueInputSum);
}

 
 