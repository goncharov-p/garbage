const arr=[2,34,5,65,23,54];

let fun = _.some(arr, testFunction = (num) => {
    return num === 5;
})

if(fun === true){
    console.log("Да");
}else{
console.log("Нет");
}
