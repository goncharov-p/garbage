const arr = [2,4,6];
const mas = [4,3,6]

//const result = _.union(arr,mas); первое решение

//console.log(result);
 //_____________________________________________________
 //Второе решение

 
const fun = (arr,mas) => {
        mas.forEach(elem=>{
         if(!arr.includes(elem)){
           arr.push(elem)
         }
        })
        return arr;
}

console.log(fun(arr,mas));