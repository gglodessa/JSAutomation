"use strict";
//циклы для повторения одно типных действий
let num = 50;

while(num <= 55){
    console.log(num);
     num++;
 }


//цикл 2
let num = 50;
do {
    console.log(num);
    num++;
}
while(num <55);


//цикл 3 i - итератор,первая i начало цикла, точка запятой между аргументами наших условий 
//второе i это условие когда он остановит цикл и третье шаг цикла что будет происходить в новом цикле

let num = 50;
for (let i = 1; i < 8; i++){
    if (i === 6) { 
        break;  // остановит цикл
        //continue;   позволяет пропустить шаг 
    }
    console.log(i);
}



let num = 50;
for (let i = 1; i < 8; i++){
    console.log(num);
    num++;
}