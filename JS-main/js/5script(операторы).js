"use strict";

console.log('arr' + " - object");
console.log(4 + +"5"); //плюс перед чем-то унарный плюс

//инкримент и дикримент
let incr =10,
    decr =10;
    //префиксная
    //++incr; 
    //--decr; 
    //постпрефиксная
    incr++; //оператор инкримента увеличение на единицу
    decr--; //оператор дикримента уменьшение на единицу
    console.log(incr);  //console.log(incr++); если сразу так то не прибавит и не отнимет нужно ставить перед
    console.log(decr);  //console.log(decr--); вот так -  console.log(++incr); console.log(--decr);

    // = присваивание
    // == сравниваем
    // ===строгое сравнивание
    console.log(2*4 == 8);
    console.log(2*4 == '8'); // сравнение по значению
    console.log(2*4 === '8'); // строгое сравнени покажет фолс потому что єто не правда так как 8 записана как строка

    && оператор и // хотяб два правдивых
    || оператор или // или это правда или это 
     
    const isChecked = true,
        isClose = true;
        console.log(isChecked && isClose);    
        console.log(isChecked || isClose);   
        ! оператор отрицание меняет значение

   