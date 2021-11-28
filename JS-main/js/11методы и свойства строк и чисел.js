//методы это вспомогательные функции а свойства вспомогательные значения(чисел)
//где найти методы и свойства открываем например такой тп данных как стринг и там будут писаться все свойства методы и т д https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number
"use strict"
//lenght - это свойство
const str = "test";
console.log(str.length);

const arr = [1, 2, 4, 7];
console.log(arr.length);

const str = "test";
console.log(str[2]); // получим третий символ так начало с 0

const str = "test";
console.log(str.toUpperCase()); // метод изменил регистр в большой
console.log(str.toLowerCase()); // метод изменил регистр в нижний регистр
console.log(str);

//метод который позволяет найти кусочек строки и сказать с какой позиции она начинается
let fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); // метод чтоб увидеть с какого индекса начинается слово

//методы которые взаимодействют со строками
const logg = "Hello world!!";
console.log(logg.slice(6, 10)); // этот аргумен обрезает то что не будет включать
console.log(logg.slice(6)); // еще один способ мы можем указать только первый аргумент и он покажет все после него(данный метод еще можно использовать с отрицательными значениями работает так же)

//еще один метод
const logg = "Hello Alex!!!";
console.log(logg.substring(6, 11));  // не поддерживает отрицательные значения и можно задавать первій аргумент раньше чем второй

//еще метод
const logg = "Hello Alex!!!";
console.log(logg.substr(6, 5)); //сколько символов необходимо вырезать


//МЕТОДЫ ЧИСЕЛ
const num = 12.2;
console.log(Math.round(num)); // метод округляет

const test = "12.2px";
console.log(parseInt(test));//переводит число в другую систему исчесления
console.log(parseFloat(test)); // переводит число в другую систему исчеления но с другими значениями



