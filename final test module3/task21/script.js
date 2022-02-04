let str ='var_text_hello'
let elem = 0;
let result = '';
let resultfull = '';

let res = str.split('_');
res.map(element => {
    for(let i = 0; i < element.length; i++){
        if(i === 0){
            result = element[i].toUpperCase();
        } else {
            result += element[i] 
        }
    }  
    resultfull += result;
});

console.log(resultfull);