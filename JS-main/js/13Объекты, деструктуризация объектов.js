// научимся использовать методы обїектов

const obj = new Object(); //  старый способ


const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        boder: 'balck',
        bg: 'red'
    }
};
/* console.log(options.name); // чтоб достучаться до объекта
delete options.name; //чтоб удалить
console.log(options); */

for (let key in options)  //чтоб перебрать узнать что есть
{
console.log(`Свойство ${key} имеет значение ${options[key]}`);
}
 // но вывел объект для объекта в объекте и что до него достучаться нужно
//можно запустить перебор внутри перебора


const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        boder: 'black',
        bg: 'red'
    }
};
//console.log(options["colors"]["boder"]);  можно еще так достучаться к объекту в объекте

for (let key in options) {
if (typeof(options[key]) === 'object'){
for (let i in options[key]) {
    console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
}
} else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
}
}



//функции и методы которые есть внутри объекта
//ВАЖНО - мы не можем узнать длину объекта с помощью lehght

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        boder: 'black',
        bg: 'red'
    }
};
let counter = 0; //создаем переменную которая будет считать сколько свойст в объекте
for (let key in options) {
    if (typeof(options[key]) === 'object'){
    for (let i in options[key]) {
        console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        counter++;
    }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    counter++;
    }
    }
    console.log(counter);
//получим 5 так как обраемся и к объекту в объекте НО ЭТО НЕ ОЧЕНЬ УДОБНО


// есть такой метод как keys с помощью него можно перебрать вывестив все в масив и посчитать с помощью ленг
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        boder: 'black',
        bg: 'red'
    },
    //помните методы это действия которые умеет совершать наш объект
  makeTest: function() {
      console.log('test');
  }
 };
  // для того чтоб запустить метод в объекте
//круглые скобки значат что что-то идет в работу
options.makeTest();

console.log(Object.keys(options).length);


//Итог объекты это это структурры котрые могут сохранять в себе любые типы данных
//в формате ключ значение.  Чтоб перебрать объект можем использовать конструкцию 
//for in кроме того можем получать свойства через точку либо квадратную скобку
//У объктов бывают встроеный методы и встроенные свойства которые мы можем использовать
//Самое главное для того точб объект умел что-то делать мы можем во внутрь его записывать функции
// таким образом у нашего объекта будут появляться методы

//ДЕСТУКТОРИЗАЦИЯ ОБЪЕКТОВ КОГДА НУЖНО ДОСТУЧАТЬСЯ ДО ВЛОЖЕНЫХ СВОЙСТВ
// по простому будем вытаскивать с объекта отдельные переменные

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        boder: 'black',
        bg: 'red'
    },
   /* makeTest: function() {
      console.log('test');
  } */
 };

/* options.makeTest();  */

const {boder, bg } = options.colors;
console.log(boder);


//джава скрипт объекто орентированый язык тоесть он устроен все что существует идёт от объектов