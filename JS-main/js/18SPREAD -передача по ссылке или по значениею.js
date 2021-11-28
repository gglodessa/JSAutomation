let a = 5,
    b = a;

b = + 5;

console.log(b);
console.log(a); // тут все правильно отработало

//когда мы работаем с примитивными типами данных строки, числа
// то они передаются по значению
//Когда мы работаем с объектами (масивы,объекты,функции) тут идет передача по ссылке
//мы не копируем новый объект, мы просто передаем значения по ссылке
//тоесть передаем ссылку
const obj = {
    a: 5,
    b: 1
};

const copy = obj; //ссылка на объект - изменим два объекта
copy.a = 10;

console.log(copy);
console.log(obj);

//как создавать копии объектов и копии массивов

function copy (mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers); //Тут мы совершили клонирование объекта
newNumbers.c.x =10; // поменяет везде, поверхностная копия
//это так работает потому что есть вложенная структура и она уже считается поверхностаня копия
// тоесть вложеный объект или массив имеет ссылочный тип!!!

newNumbers.a = 10;
console.log(newNumbers); //выводит новый объект
console.log(numbers); // проверяем что изначальная конструкция не изменилась
//получили два разных объекта
// но если обратиться к объекту в объекте то поменяется в двух местах
//следовательно из этого есть глубокие и поверхностные копии объектов


//еще один способ - метод чтоб соеденить несколько объектов - обжектесайн
const obj = {
    a: 5,
    b: 1
};
const add = {
    d: 17,
    e: 20
};
console.log(Object.assign(obj, add)); //два аргумента, первый это тот объекто кторый хотим сюда поместить
// второй тот который помещаем
//тут  мы создали не зависимую поверхностную копию объекта 
//тоже самое мы можем создать с пустым объектом чтоб создать просто копию
//Пример:
const add = {
    d: 17,
    e: 20
};
const clone = Object.assign({}, add); 
clone.d = 20;
console.log(clone);
console.log(add);


//Клониронване массива метод
const oldArray = ['a', 'b', 'c'];
//const newArray = oldArray; // так просто ссылка
const newArray = oldArray.slice(); // так копия, еще можно добавить аргуменыт по колличеству

newArray[1] = 'fwefewfewfwe';
console.log(newArray);
console.log(oldArray);

//ещё один метод создания поверхностной копии использование опператора разворота
//спреад он есть и для массивов и объектов
//он разворачивает структуру и превращает её в набор каких-то данных

const video = ['youtube', 'video', 'rutube'],
blogs = ['workprase', 'bloger', 'livejournal'],
internet = [...video, ... blogs, 'vs']; //c преад оператор в действие
console.log(internet);

//пример по сложнее
function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 8,];

log(...num);

//пример для объектов и массива с помощью спред оператора

const array = ['1', 'b'];

const nextArray = [...array];
nextArray.push(10);

console.log(array);
console.log(nextArray);


const q = {
    one: 1,
    two: 2
};

const newQ = {...q};
newQ.one = 10;
console.log(newQ);
console.log(q);