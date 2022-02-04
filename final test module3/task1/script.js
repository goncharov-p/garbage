const str = 'qwertty asddfgh';
let x = 0;

const fun =(str) => {

    for(let i = 0;i !== str.length; i++){
        x++;
        if(x===3){
            console.log(str[i]);
            x = 0;
        }
    }
};
fun(str);
