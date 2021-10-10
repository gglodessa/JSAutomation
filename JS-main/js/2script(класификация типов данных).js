 "use strict";

   let number = 4; //числа
 console.log(number + 2);
 console.log('string' * 9); //NaN

 const person = 'Alex'; //строка можно кавычки двойные "" и косые ``


 const bool = true; //булиновое значение либо да либо нет

 console.log(somthing); //null

 console.log(und); //undefined

 //объект может содержать данные(свойства) объекта действия(они же методы)
const obj = {                
        name: "Alex",
        age: 25,
        isMariied: false
    };
console.log(obj.name);
console.log(obj.["name"]); // старый формат обращения

//масив частный случай объекта
let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 6, {}, [] ]; 
console.log(arr[3]);
