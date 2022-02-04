//1.Даны две строки. Сравнить строки. Вывести символы большей строки, на количество которых отличается.

// const differenceSymbols = (str1, str2) => {
//   str1.slice(str2.length, str1.length);
//   console.log( str1.slice(str2.length, str1.length));

//  return result;
// }
// const text1 = 'text education part 2';
// const text2 = 'text education';
// const result = differenceSymbols(text1, text2);
// console.log(result); 

// 2. В функцию подается 2 массива: 1 ключи, 2 значения. Сформировать объект.

// const func = (arr1, arr2) => {
//   let w={};

//   arr1.forEach((el,ind) => {
//     w[arr1[ind]]=arr2[ind];
//   });
// return w;
// }
// const  a = ['name', 'age', 'country'];
// const  b = ['test', 25, 'RF'];
// const result = func(a, b);
// console.log(result);

//3.Напишите функцию findCouple(array, number), которая ищет в массиве все пары целых чисел, сумма которых равна заданному значению.


// const array=[3,7,5,6,5,4,8]
// findCouple=(array, number)=>{
//   const t=[];
// array.forEach(element => {
//   array.forEach(elm=>{
//     if(element+elm===number){
//       t.push([element,elm]);

//     }
//   })
  
// });
// return t;
// }
// console.log(findCouple(array,10));

// 4.Вернуть true, если хоть одно значение в массиве "положительное"

// const arr=[-3,-4,-5,6]

// const fun=(arr)=>{
//   let x=false;
//   arr.forEach(element => {
//     if(element>0){
//       x=true;
//     }
//   });
// return x;
// } 
// console.log(fun(arr));

// 5 Вернуть индекс последнего элемента массива, который удовлетворяет условию

// const arr=[5, 2, 7, 2, 5, 4, 1, 7, 8, 9, 4, 6, 3,5,6,2]
// const fun=(arr,val)=>{
// let ind=0;
// arr.forEach((element,idex) => {
//   if(element>val){
//     ind=idex;
//   }
// });
// return ind;
// }

// console.log(fun(arr,4));

// 6 Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

// const arr=[3,1,1,1,3,2,6,7,8]

// const fun=(arr)=>{
//   let t=0;
//   let i=0;
//   arr.forEach(element => {
//     t=t+element;
//     if(t>10){
//       console.log(i);
//       return;
//     }
//     i++;
//   });
// }
// console.log(fun(arr));

//7 В функцию передается несколько массивов. Вывести элементы из первого массива, переданного в функцию, которые имеются во всех других переданных в функцию массивах

// const arr=[3, 6, 1, 8, 3, 6, 3, 6, 3, 6]
// const arr2=[1, 4, 2, 4,3]
// const arr3= [6, 3, 2, 8, 1]
// const fun=(arr,arr2,arr3)=>{
//    const result=[];
//    arr.forEach(element => {
//       arr2.forEach(elem => {
//         arr3.forEach(val => {
//            if(element===elem&&element===val){
//               if(!result.includes(element)){
//                result.push(element);
//                }
//             }
//         });
//      });
//  });
//  return result;
// }
// console.log(fun(arr,arr2,arr3));

// 9 Вывести сообщение равны или 2 объекта

// const a = {test: 8, text: 9};
// const b = {test: 8, text: 9};

// const fun=(a,b)=>{
//     if(a.test===b.test&&a.text===b.text){
//     return true;
//     }else{
//     return false;
//     }
//    }
//    console.log(fun(a,b));

// 10Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игно

// const arr = [4, 7, 1, 9, 6, 8, 4, 6, 3, 6]
// const arr2=['text', 'education', 'part', 'Text']
// const removeDuplicates=(arr)=>{
//   const result=[]
//   let count=[]
//   console.log(typeof(arr[0]));
//   if(typeof(arr[0])==='string'){
//        arr.forEach(element => {
//       count.push(element.toLowerCase())
//       count.forEach(element => {
//         if(!result.includes(element)){
//             result.push(element);
//             }
//       });
// });
// }else{
//     arr.forEach(element => {
//         if(!result.includes(element)){
//         result.push(element);
//         }
//        });
      
// }
// return result;
// }
// console.log(removeDuplicates(arr));

// 11 Преобразовать коллекцию в другой вид
/*const arr=[
    {firstName: 'Test', lastName: 'Test1', age: 34},
    {firstName: 'Text', lastName: 'Text1', age: 20},
    {firstName: 'User', lastName: 'User1', age: 87}
  ]
  const fun=(arr)=>{
    const fullArr=[];
    [a,b,c]=arr;
    arr.forEach(element => {
        const newObject = {fullName: element.firstName + ' ' + element.lastName, age: element.age}
        fullArr.push(newObject)
       
    });
    console.log(fullArr);
}
  
fun(arr);*/
 
// 12 В функцию попадается коллекциях, свойство, которое нужно изменить и новое значение.
// const arr=[
//     {firstName: 'Test', lastName: 'Test1', age: 34},
//     {firstName: 'Text', lastName: 'Text1', age: 20},
//     {firstName: 'User', lastName: 'User1', age: 87}
//   ]

//   const fun=(arr,val1,val2)=>{
//       arr.forEach(element => {
//           for(let key in element){
//               if(key===val1){
//                 element.key=val2;
//               }
            
//           }
          
         
          
//       });
//     return arr;
//   }
//   console.log(fun(arr,'age',32));

// 13  Напишите функцию range(), принимающую два аргумента: начало и конец диапазона, и возвращающую массив, 
// который содержит все числа из диапазона, включая начальное и конечное. 
// Третий необязательный аргумент функции range() – шаг для построения массива. Убедитесь, что функция range() работает с отрицательным шагом.

// const range=(val1,val2,va)=>{
// const result=[]
// while(val1!==(val2+va)){
//     result.push(val1);
//     val1+=va;
// }
// // for(let i=val1;i<=val2;i++){
// // result.push(i);
// // }
// return result;
// }
// console.log(range(5,2,-1));

// 15.Дана строка. Разделить строку на фрагменты по три подряд идущих символа. 
// В каждом фрагменте средний символ заменить на случайный символ, не совпадающий ни с одним из символов этого фрагмента. 
// Показать фрагменты, упорядоченные по алфавиту.

// const arr='test education part 2'
// const fun=(arr)=>{
//     const t='_';
//     const res=[];
//     let count=0;
//     const res1=[]

//     for(let i=0;i<=arr.length-1;i+=3){
//         let result=arr.slice(i,i+3);
//         res.push(result);

//     }
//     res.map(element => {
//       element=element.replace(element[1],t);
//       res1.push(element);
//     })
//     return res1.sort();
// }

// console.log(fun(arr));


// 16. Напишите функцию, которая четное число возводит в квадрат, а нечетное в куб. 
// После умножает это значение на 2-й параметр. Прибавляет 3-й и находит корень от получившегося результата, 
// округленный до сотых. Но за счет того, что функция вызывает функцию.

// const fun=(val1,val2,val3)=>{
//     if(val1%2===0){
//         val1=val1*val1;
//     }else{
//         val1=val1*val1*val1;
//     }
//     val1=val1*val2;
//     val1=val1+val3;

//     val1=Math.sqrt(val1) 

//     return val1.toFixed(2);
// }
// console.log(fun(17,6,2));

// 17.Дана строка. Сделайте заглавным первый символ этой строки

// const arr='text education part 2'

// const fun=(arr)=>{
//     const result=[];
//     const w=arr[0].toUpperCase()
//     const t=arr.slice(1, arr.length)
//     arr[0]=w;
//     result.push(w+t)

//     return result;
// }
// console.log(fun(arr));

// 18 Проверьте, что строка заканчивается на .html

// const arr='http://localhost.html'

// const fun=(arr,val)=>{
//     console.log(arr.endsWith(val));
// }
// console.log(fun(arr,'html'));

//19.Дана строка; нужно написать функцию, которая позволяет вернуть значение true, 
//если строка является палиндромом, и false если нет

// const arr='testset'

// const fun=(arr)=>{
//     let j=arr.length-1;
//     let result=true;
//     console.log(j);
//      for(let i=0;i<=j;i++){
//          if(arr[i]===arr[j]){
//              result=true;
//          }else{
//              result=false;
//              return result;
//          }
//          j--;
//      }
//      return result;
// }

// console.log(fun(arr));

// 20 Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
//  Элементы массива будут разделены запятой.

//   const arr=[5, 8, 'test', 7, 'b', 789, 'fff']
 
//   const fun=(arr)=>{
//       let result='';
//       arr.forEach(element => {
//           result=result+element;
          
//       });
//       console.log(result);
//   }
//   fun(arr);

//21 Ответ в html

//22 Дана строка. Показать номера символов, совпадающих с последним символом строки.

// const arr='test education part'

// const fun=()=>{
//     const t=arr[(arr.length)-1];
//     const result=[]
//     for(let i=0;i!==arr.length;i++){
//         if(arr[i]===t){
//             result.push(i);

//         }

//     }
//     console.log(result);
// }
// fun(arr);

//23 Удалить из массива значения, индексы которых указаны во втором массиве
// const arr=[5, 2, 8, 6, 1, 9, 3, 6, 3, 7, 1]
// const arr2=[2, 5, 1]
// const fun=(arr,arr2)=>{
//     const result=[];
//     for(let i=arr2.length-1;i>-1;i--){
//        for(let j=0;j<i;j++){
//            if(arr2[j]<arr2[j+1]){
//                let t=arr2[j+1];
//                arr2[j+1]=arr2[j]
//                arr2[j]=t;
//             }

//        }
//     }

//     arr2.forEach((element) => {
//         arr.forEach((elem,index) => {
//             if(element===index){
//                 arr.splice(index,1)
//             }
            
//         });
        
        
//     });

//     console.log(arr);
// }

// fun(arr,arr2);

// 24.Функция параметрами принимает массив, 1 значение поле с которым равно, 2 значение больше, которого другое поле.
// Например, в коллекции мне нужно вывести значения, в которых возраст больше 18, а страна 'RF'.
// const arr = [
//     {name: 'test', age: 34, country: 'RF'},
//     {name: 'test2', age: 12, country: 'RF'},
//     {name: 'test1', age: 54, country: 'RF'}
//   ];

//   const func=(arr,val1,val2)=>{
//       arr.forEach(element => {
//          if(element.country==='RF'&&element.age>18){
//              console.log(element);
//          }
          
//       });

//   }
//   func(arr, 'RF', 18)

// 25.Дан текст. Найти сумму имеющихся в нем цифр.
// const arr='test455test786'
// const fun=(arr)=>{
//     let sum=0;
//     let x=0;
//     const t=arr.length;
//     for(let i=0;i!==t;i++){
//        x= Number(arr[i])
//        console.log(x);

//        if(x){
//            sum=sum+x;
//        }
//     }
//     console.log(sum);
// }
// fun(arr);

//26 Даны две строки. Определите, содержится ли меньшая по длине строка в большей.

// const arr='text education part 2'
// const arr2= 'text'

// const fun=(arr,arr2)=>{
//     if(arr.includes(arr2)){
//         return true;
//     }else{
//         return false;
//     }

// }
// console.log(fun(arr,arr2));

// Второе решение
// const arr='text education part 2'
//  const arr2= 'text'

//  const fun=(arr,arr2)=>{
//    let count=0;
//    let result=false;
//    console.log(arr2.length);
//    for(let i=0;i<arr.length;i++){
//      for(let j=0;j<arr2.length;j++){
//        if(arr2[j]===arr[i+j]){
//          count++;
//        }
//      }
//      if(count===arr2.length){
//        result=true;
//      }
//      count=0
//    }
  
//   return result;
//  }
//  console.log(fun(arr,arr2));


//27.Дана строка. Вставить после каждого символа пробел.

// const arr='text education part 2'

// const fun=(arr)=>{
//     let result='';
// for(let i=0;i!==arr.length;i++){
//     if(i%2===0){
//         result=result+arr[i];
//     }else{
//         result=result+" "+arr[i]+" ";
//     }
// }
// return result;
// }

// console.log(fun(arr));

//28 Перевернуть значения массива

// const arr=[6, 2, 9, 1, 7, 4, 7]

// const fun=(arr)=>{
//     const result=[];
//     const w=arr.length;
//     for(let i=arr.length-1;i>0-1;i--){
//         result.push(arr[i])
//     }
//  return result;
// }
// console.log(fun(arr));

//29 Создайте функцию, которая параметром принимает объект. Функция умножает все числовые свойства объекта на 2.

// const obj={
//     name: 'test',
//     age: 25,
//     weight: 65,
//     height: 165
//   }

//   const fun=(obj)=>{
//       for(let key in obj){
//           if(typeof(obj[key])==="number"){
//               obj[key]=obj[key]*2;
//           };
//       }
//     console.log(obj);
//   }

//   fun(obj);

//30 Возвращает массив, где каждый элемент продублирован

// const arr=[1,2,3]

// const fun=(arr)=>{
//  const result=[];
//  arr.forEach(element => {
//      for(let i=0;i<2;i++){
//          result.push(element);
//      }   
//  });
//  return result;

// }
// console.log(fun(arr));

//31. Вернуть массив тех значений, которые есть в первом, но нет во втором

// const arr=[4, 7, 2, 9, 3, 5, 6, 4, 5, 1, 4]
// const arr2= [4, 5, 6, 7, 8]

// const fun=(arr,arr2)=>{
//     const result=[]
// arr.forEach(element => {
//     if(!arr2.includes(element)){
//         result.push(element)
//         }
//     });
//     return result;
// }
// console.log(fun(arr,arr2));

//32 Вернуть отсортированный массив уникальных значений

// const arr=[5, 2, 8, 4, 8, 2, 5, 8, 2, 17, 8, 4, 2, 4, 7, 3]

// const fun=()=>{
//     const result=[];
//     let counter=0;
//      arr.forEach((element,index) => {
//         arr.forEach((elem,ind) => {
//             if(element===elem){
//                 counter++;
//             }
            
//         });
//         if(counter<2){
//             result.push(element)
//         }
//          counter=0;
//      });
    
//     return result;
// }
// console.log(fun(arr));

//33.Реализуйте функцию, которая принимает на вход объект и возвращает массив-пар.
// const w={ 'dog': 6, 'cat': 11 }

// const fun=(w)=>{
//     const result=[];
//     for (let key in w){
//         result.push([key,w[key]])
//         console.log(w[key]);
//     }
//     console.log(result);
// }

// console.log(fun(w));




//3 блок

/*const t = _.reduce([1,2,3], function (memo, item) {
  return memo + item;
}, 0)

console.log(t);


const t = [1, 2, 3].reduce((sum, item) => {
  return sum + item;
}, 0)
console.log(t)



const total = [1, 2, 3].filter(item => item > 2)
console.log(total)


const total = [1, 2, 3].sort()
console.log(total)


const total = [2, 1, 2, 3].sort()
console.log(total)*/

const arr=[1,2,45,77,88,5,2,1,77];

const arr2 = [
      {name: 'test', age: 34, country: 'RF'},
      {name: 'test2', age: 12, country: 'RF'},
      {name: 'test1', age: 54, country: 'RF'},
      {name: 'test2', age: 12, country: 'RF'},
    ];

  const arr3=[0,"",45,'test',null]

  arrOb1=["name","lastname","firstmane"]
  arrOb2=["pavel","ivan","petr"]

// const t = [2, 1, 2, 3].sort()

// const t=_.filter(arr,fun=(n)=>{return n>2})

//const t=arr.reduce((n,m)=>{return n+m;},0)

//const t=arr.reduceRight((n,m)=>{return n+m},0)

// const t= arr.find(fun=(n)=>{return n>70});

// const t=_.findWhere(arr2,{name:'test1'});

// const t=_.reject(arr,fun=(n)=>{return n<2});

// const t=_.every(arr,fun=(n)=>{ return n>20})

// const t=_.some(arr,fun=(n)=>{return n>20});

// const t=_.contains(arr,78);

// const t=_.pluck(arr2,"name")

// const t=_.max(arr)

// const t=_.min(arr)

// const t=_.sortBy(arr);

// const t=_.sample(arr,3);

//console.log(arr3);

//const t=_.compact(arr3);

//const t=_.first(arr,2)

//const t=_.last(arr,2)

// const t=_.union(arr,arr3)

// const t=_.intersection(arr,arr3);

// const t=_.difference(arr,arr3)

// const t=_.uniq(arr)

// const t=_.object(arrOb1,arrOb2)

// const t=_.chunk(arr,3)

// const t=_.indexOf(arr,77);

// const t=_.lastIndexOf(arr,77);

// const t=_.range(3,33,3)

// const t=  _.where(arr2, {name: 'test2'} );

// const t=_.sortBy([1,4,6,4,1,3,45,11,23]);
console.log(t);

