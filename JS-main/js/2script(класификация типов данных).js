 "use strict";

   let number = 4; //числа
 console.log(number + 2);
 console.log('string' * 9); //NaN
 console.log(4/0); // получим инфинити это числовой тип данных означает бесконечность

 const person = 'Alex'; //строка можно кавычки двойные "" и косые пектики ``


 const bool = true; //булиновое значение либо да либо нет

 console.log(somthing); //null чего-то не существует можно увидеть в браузере

 let und;
 console.log(und); //undefined что то существует но у него нет значения

 //объект может содержать данные(свойства) объекта действия(они же методы)
 //структура для хранения данных, комплесная структура
const obj = {                
        name: "Alex",
        age: 25,
        isMariied: false
    };
console.log(obj.name);
console.log(obj["name"]); // старый формат обращения
//объекты это ключевая единица джава скрипта 

//масив частный случай объекта
//структура хранения данных хранящихся по порядку
let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 6, {}, [] ]; 
console.log(arr[3]);
//масивы как и объекты комплексные типы данных