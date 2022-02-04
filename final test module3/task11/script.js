let input = '';

window.onload = function init () {
    input = document.getElementById('add');
    input.addEventListener('change', updateInput);
}

const updateInput = (e) => {
    input = e.target.value;
}



const onClickButton = () =>{
console.log(input);
}