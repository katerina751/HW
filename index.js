// Домашнее задание 4

// задание 1

let i = 1;

let n = 2;

while (i <= n) {
    alert('Привет');
    i++;
}

// задание 2

let j = 1;

while (j < 6) {
    console.log(j);
    j++;
}

// задание 3

let s = 7;

while (s < 23 && s > 6) {
    console.log(s);
    s++;
}

// задание 4

const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}

for (let worker in obj) {
    console.log(`${worker} - зарплата ${obj[worker]} долларов`);
}

// задание 5

let n5 = 1000;
const min = 50;
let num = 0;

while (n5 > min) {
    num++;
    n5 = n5 / 2;
}

console.log(n5, num)

// задание 6

let firstFriday = 2;

for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчёт.`)

};

// Домашняя работа 5

// задание 1

function less(a, b) {
    if (a <= b) {
        return (a);
    } else {
        return (b)
    }
}

less(12, -17);

// задание 2

function parity(n2) {
    if (n2 % 2 == 0) {
        return ('Число четное');
    } else {
        return ('Число нечетное')
    }
}
parity(122);

// задание 3

function square(z) {
    console.log(z ** 2)
}

square(7);

function square1(z) {
    return z ** 2;
}

square1(5);

// задание 4

let userAnswer = prompt("Сколько Вам лет?");

if (userAnswer < 0) {
    function printMessage() {
        alert("Вы ввели неправильное значение");
    };

} else if (userAnswer >= 0 && userAnswer < 12) {
    function printMessage() {
        alert("Привет, друг!");
    };
} else if (userAnswer >= 13) {
    function printMessage() {
        alert("Добро пожаловать!");
    }
};

printMessage();

// задание 5

let anuNumeric = (p, o) => {
    if (isNaN(p)) return `Одно или оба значения не являются числом`;
    else if (isNaN(o)) return `Одно или оба значения не являются числом`;
    else return (p * o);
}

anuNumeric('fhchgch', 8);

// задание 6

let numericUser = (a) => {
    if (isNaN(a)) return `Переданный параметр не является числом`;
    else return `${a} в кубе равняется ${a ** 3}`;
}

numericUser(Number(prompt('Введите число')));

// задание 7

let monthNumber = (xx) => {
    if (xx === 12 || xx === 1 || xx === 2) console.log('Зима');
    else if (xx === 3 || xx === 4 || xx === 5) console.log('Весна');
    else if (xx === 6 || xx === 7 || xx === 8) console.log('Лето');
    else if (xx === 9 || xx === 10 || xx === 11) console.log('Осень');
    else console.log('Переданный параметр не является номером месяца');
}

monthNumber(Number(prompt('Введите номер месяца')));

// Домашняя работа 6

// задание 1

const numbs = [1, 5, 4, 10, 0, 3]

for (let i = 0; i < numbs.length; i += 1) {
    if (numbs[i] === 10) break;
    console.log(numbs[i]);
}

console.log(numbs.slice(numbs[i] === 10));

// задание 2

let arr = [1, 5, 4, 10, 0, 3]
let ind = 0, found = false;
for (let elem of arr) {
    if (elem === 4) {
        found = true;
        break;
    }
    ++ind;
}
if (!found) ind = -1;

console.log(ind);

// задание 3

let space = [1, 3, 5, 10, 20]
console.log(space.join(' '));

// задание 4

let array4 = [];
let array4Honest = [];
for (i = 0; i < 10; i++) {
    array4.push(Math.floor(Math.random()*10));
    if(array4[i]%2==0) array4Honest.push(array4[i]);
}

console.log(`Массив, состоящий из случайных чисел: ${array4.join(' ')}`);
console.log(`Массив, состоящий из четных значений от исходного: ${array4Honest.join(' ')}`);


// задание 5

let array5 = [];

for (let i = 0; i < 3; i++) {
	array5[i] = [];
	
	for (let j = 0; j < 1; j++) {
		array5[i].push(j + 1);
	}
}

console.log(array5);

// Задание 6
let array6 = [1, 1, 1];
console.log(array6.concat(2,2,2));

// Задание 7

let array7 = [9, 8, 7, 'a', 6, 5];
array7=array7.sort();
array7 = array7.filter(function(item){return typeof item == 'number';});
console.log(array7);

// Задание 8

let array8 = [9, 8, 7, 6, 5];
userAnswer8=Number(prompt('Введите число'));
console.log(array8.includes(userAnswer8));

// Задание 9

let str = 'abcdef';
console.log(str.split('').reverse().join(''));

// Задание 10

let array10 = [];

for (let i = 0; i < 6; i++) {
    array10.push(Math.round(Math.random()*10));
}

console.log(array10);

const getAverage = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i += 1) {
      sum += numbers[i];
    }
    return sum / numbers.length;
};
  
console.log(getAverage(array10));

// Задание 11

let array11 = [[1, 2, 3,],[4, 5, 6]];

let result = [].concat(array11[0],array11[1]);
console.log(result);

// Задание 12

let array12 = [];

for (let i = 0; i < 10; i++) {
    array12.push(Math.round(Math.random()*10));
}

console.log(array12);

let sum = 0;
const arrSum = (number) => {
    for (let i=0; i<number.length; i++){
        sum = number[i]+number[i+1];
        return sum
    }
}

console.log(arrSum(array12));
