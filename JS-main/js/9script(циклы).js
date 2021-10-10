"use strict";
//циклы для повторения одно типных действий
//let num = 50;

// while(num <=55){
//     console.log(num);
//     num++;
// }

let num = 50;
do {
    console.log(num);
    num++;
}
while(num <55);

let num = 50;

for (let i = 1; i < 8; i++){
    if (i === 6) {
        //break;  - остановит цикл
        continue; //  розволяет пропустить шаг 
    }
    console.log(i);
}