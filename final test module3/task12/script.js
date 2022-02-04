const obj = { a:4,
            b:8}

const fun = (obj) => {
  
    let result = `https://underscorejs.org?`
    for (const key in obj) {
                result += `${key}`+'=' + `${obj[key]}` + '&';
                console.log(result);
    }
return result;
}

console.log(fun(obj));