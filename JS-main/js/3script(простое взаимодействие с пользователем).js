"use strict";

//Всё эти команды можно тестировать только в браузере

alert('Hello'); // сообщение подтверждения

const result = confirm('Are you here?'); //задать вопрос и два варианта ответа ок или отмена
console.log(result);

// задать вопрос и пустые кавычки чтоб можно было подставить ответ
const answer = prompt("Are you here?", "18"); 
console.log(typeof(answer)); // typeof в ответе будет тип файла строка или число.
// Вся информация которая приходит от пользователя будет в виде строки-строка

const answers = [];

answers[0] = prompt ('What is?', '');
answers[1] = prompt ('Who are you?', '');
answers[2] = prompt ('Where are you?', '');

 