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
