//METOD forEach
//метод фориач берет каждый элемент и что-то с ним делает(вывести в консоль, наесить обработчик событий, покарсить элемент в цвет)
//особенность данного метода он не создает новый массив он перебирает существующий массив

const arr = ['str', 5, {}];

//новый формат
arr.forEach(item => {
console.log(item);
});
//если одна команда можно и так написать
arr.forEach(item => console.log(item));

//старый формат - item это каждый элемент который мы перебираем, i номер, arr массив. Названия произвольные могут быть
arr.forEach(function(item, i, arrr) {

});

//пример с кнопками со страницы
const btn = document.querySelectorAll('.btn'); // получу псевдомассив ['btn', 'btn2']  у псевдомассива нет практически не каких методов
btn.forEach(item => {
item.addEventListener('click', () => {
console.log('Вы нажали на кнопку');
});

});


//METOD fillter создается новый массив с заданнами кретериями для перебора 

const names = ['Alex', 'Nastya', 'Elena', 'Kristina', 'Veronika'];

const shorNames = names.filter(name => {
return name.length < 6

});

console.log(shorNames);


//METOD map похож на метод фориач но он создаст новый массив
//можно перезаписывать массивы без = не кладя данные в новый массив

let answers = ['IvaN', 'ANNa', 'VasILek'];

answers = answers.map(item => item.toLowerCase()); 
console.log(answers)

//второй вариан одно и тоже
answers = answers.map(item => {
return item.toLowerCase();
});
console.log(answers)


//METOD  some and every возвращает либо труе либо фолс нового массива не будет))
//every сщщтветсвие всех элементов
//some найти в массиве хоть какой-то элемент цифра
const some = [4, 5, 'hjg'];

console.log(some.every(item => typeof(item) === 'number'));
console.log(some.some(item => typeof(item) === 'number'));

//METOD reduce слаживает, сворочивает внутри себя

let numbers = [4, 5, 7 , 3, 2, 11, 7];

const result = numbers.reduce((sum, current) => sum + current);
console.log(result);


// превратим объект в массив

const obj = {
    Ivan: 'persone',
    Ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

 //метод преварти любой объект в двумерный массив(будут массивы в массиве)
 //все методы перебора стоят на колл бек функциях
let newArr = Object.entries(obj)
.filter(item => item[1] === 'persone') //сказал чтоб у каждого элемента в массиве второй индекс был персон
.map(item => item[0]); // тут мы выведем в массив только значения с индексом 0 тоесть имена


console.log(newArr);


