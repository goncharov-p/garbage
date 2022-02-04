const arr = [2,3,2,4,4,5,5];
let i = 0;
let result = 0;

const fun = (arr) => {
    arr.forEach(element => {
        arr.forEach(elem => {
            if(elem === element){
                i++;
            }
        });
        if(i % 2 !== 0){
            result = element;
            i = 0;
        }else{
            i = 0;
        }
    });
return result;
}

console.log(fun(arr));