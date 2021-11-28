"use strict"

//динамическая типизация это возможность одного типа данных превращаться в другой
//тоесть число может стать строкой а объект булиновым значением


//превращение в строку

//1)
console.log(typeof(String(null))); // получаем строку стринг превратило в строку
console.log(typeof(String(4))); // тоже строка

//2) способ канкотенация(сложение строк с чем то)

console.log(typeof((5 + ""))); //тоже строка -  при сложение со строкой будет строка


const num = 5;

console.log("https://vk.com/catalog/" + num); //перейти в пятую категорию


//Как можно что угодно превратить в число

//1)

console.log(typeof(Number('4'))); // получим намбер
//способ плохой

//2) унарный плюс
console.log(typeof(+'4')); //намбер получим

//3)
console.log(typeof(parseInt("15px", '10'))); // получим намбер - метод парстинт


//4)
let answ = +prompt("Hello", ""); // превращение с помощью унарного плюса

//все что получаем от пользователя всегда будет строка и иногда эти данные необходимо типизировать в числа


//Третий тип динамической типизации БУЛИНОВЫЕ ЗНАЧЕНИЯ

0, '', null, undefined, NaN // всегда неправда все остальное будет труе
//1)пример
let switcher =  null;

if (switcher) {
    console.log('Working...')
}

switcher = 1 //поменялось значение будет труе

if (switcher) {
    console.log('Working...')
}


//2)способ 

console.log(typeof(Boolean('4'))); //получаем булиновое значение

//3)способ

console.log(typeof(!!'4444')); //будет булиновое значение редкий прием

