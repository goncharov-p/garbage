let arr = [{name: 'width', value: 300}, {name: 'height', value: 100}]; 

const fun = (arr) =>{
    const keyArr = [];
    const val = [];
    let i = 0;
    arr.forEach(element => { 
        for (let key in element) {
            if(i%2===0){
                keyArr.push(element[key])
            }else{
                val.push(element[key])
            }
            i++;
        }      
    });
    let obj = _.object(keyArr,val);
    console.log(obj);
}

fun(arr);