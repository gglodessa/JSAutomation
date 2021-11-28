"use strict"

function first() {
//Do something
setTimeout(function(){
  console.log(1);  
}, 5000);

}

function second(){
    console.log(2);
};

first();
second();

//если функции идут в коде одна за другой это не значит что они 
//что они выполняются прямо так же. 
//Они запускаются одна за другой но результат могут дать в разное время

// Если просто колбек это функция которая должна быть выполнена
//после того как другая функция завершила своё выполнение

function learnJS (lang, callback){
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS('JavaScript', function(){
    console.log('Я прошел этот урок');
});


// второй вариант
function learnJS (lang, callback){
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок');
}

learnJS('JavaScript', done);
//колбеки позводляют нам быть увернеными что определеный код не начнет
//свое действие пока определный код не закончит свое исполнение