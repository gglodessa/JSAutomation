"use strict ";
//условия превращают любой тип данных в булиновое значение либо правда либо ложь
// if (4 == 9) {
// console.log('Ok!');
// }  else { 
//     console.log('Error');
// }

// const num = 50;
// if (num < 49) {
//     console.log('Error');
// } else  if (num >100){
//     console.log('Много');
//     } else {
//         console.log('Ok');
//     }

//тернарный оператор - ? (если верно) : - (если не выполнилось)
//тернарный оператор потому что в его работе учатсвует аж три аргумента это единственый тернарный 
//оператор который есть в джава скрипте (три аргумента по порядку нан - консоль лог -  консоль лог)
    const num = 50;
    (num === 50) ? console.log('Ok') : console.log('Error');
// бинарный аргумент 4 + 4 плюс бинарный аргумент
// унарный аргумент +'4'; унарный плючс который работает с одной строкой


// Модификация if else > switch 
// конструкция свитч идет только на строгое сравнение не каких больше либо меньше


    const num = 50; 

    switch (num) {
        case 49:
            console.log('HeBepHo');
            break;
        case 100:
            console.log('HeBepHo');
            break;
        case 50:   
            console.log('B To4Ky!');
            break;
        default:
            console.log('He B eToT paz');
            break;
            }