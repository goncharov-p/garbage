let obj ={
    n:"text",
    x:2,
    y:3
}

const fun =(obj) => {
    for (let key in obj) {
        if(Number(obj[key])){
            obj[key] = obj[key]*2;  }
    }
}
fun(obj);
console.log(obj);