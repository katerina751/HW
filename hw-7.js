// Домашняя работа 7

// задание 1

let str = 'js';
str = str.toUpperCase();
console.log(str);

// Задание 2

const word = [];

let searchStart = (words, search) => {
    words.forEach((word) => {
        if (word.toLowerCase().startsWith(search.toLowerCase())) {
            console.log(word);
        }
    });
}
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');

// Задание 3

let number3 = 32.58884;

console.log(Math.floor(number3, 1));
console.log(Math.ceil(number3, 1));
console.log(Math.round(number3, 1));

// Задание 4

console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

// Задание 5

let arr5 = [];

for (let i = 0; i < 1; i++) {
    arr5.push(Math.round(Math.random() * 10));
}

console.log(arr5);

// Задание 6

let arr6 = [];
let getRandomArrNumbers = (n6) => {
    for (let i = 0; i < (Math.floor(n6 / 2, 1)); i++) {
        arr6.push(Math.round(Math.random() * n6));
    }
}
getRandomArrNumbers(12);
console.log(arr6);

// Задание 7

function getRandomNumbers(a7, b7) {
    a7 = Math.ceil(a7);
    b7 = Math.floor(b7);
    return Math.floor(Math.random() * (b7 - a7) + a7);
}
getRandomNumbers(1, 10);

// Задание 8

let currentDate8 = new Date();
console.log(currentDate8);

//Задание 9

let spentDays = 73;
let currentDate = new Date();
console.log(new Date(currentDate.setDate(currentDate.getDate() + spentDays)));

//Задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря"];

let myDate = new Date;

let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " года - это " + days[myDate.getDay()];
let fullTime = "Время: " + myDate.getHours() + ": " + myDate.getMinutes() + ": " + myDate.getSeconds();

console.log(fullDate);
console.log(fullTime);

//Задание 11

//Работа с макетом
