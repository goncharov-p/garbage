const sim = "x";
const num = 3;
const arr = [];

const arrayFill = (sim,num) => {
for(let i = 0; i !== num;i++){
arr.push(sim);
}
return arr;
}

console.log(arrayFill(sim,num));