const arr = [23,2,4,45,5];
const key = ['max','index','count']

const fun = (arr) => {
     const result = [];
    value = _.max(arr);
    result.push(value);
    let number = 0;
    arr.forEach((element,index) => {
        if(element === value){
            i = index;
            number++;
        }
    });
    result.push(i);
    result.push(number)
    const obj = _.object(key,result);
    return obj;
}



console.log(fun(arr));