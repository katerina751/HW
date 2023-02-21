// Домашняя работа 8

// задание 1

let arr1 = [3, 4, 1, 9];

function sum(...arr1) {
    let sum = 0;
    for (let items of arr1) {
        sum += items;
    }
    return sum
}
console.log(sum(...arr1));

function mult(...arr1) {
    let sum = 1;
    for (let items of arr1) {
        sum *= items;
    }
    return sum
}
console.log(mult(...arr1));

function getResult(arr1, callback) {
    return callback(...arr1);
}

getResult([3, 4, 1, 9], mult);
getResult([3, 4, 1, 9], sum);


// Задание 2

const users = [
    { name: 'Jon', age: 22 },
    { name: 'Richard', age: 18 },
    { name: 'Anton', age: 32 },
    { name: 'Lida', age: 23 },
    { name: 'Bob', age: 44 }
];

console.log(users);

function getSorterArrayObj(arr2) {
    const res = [...arr2]
    return res.sort(function (a, b) {
        return a.age - b.age;
    });
}

console.log(getSorterArrayObj(users));

// Задание 3

const arr3 = [1, '4', false, 9, 'two'];

const reversArr = (arr) => {
    return [...arr.reverse()];
};

const toNumberArr = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            newArr.push(Number(arr[i]));
        }
    }
    return newArr;
};

const each = (arr, callback) => {
    return callback(arr);
};

console.log(arr3);
console.log(each(arr3, toNumberArr));
console.log(each(arr3, reversArr));

//Задание 4

const timer = (deadline) => {
    if (isNaN(+deadline)) { // + - приводим значение к number, если это NaN,
        console.log('Передано некорректное число'); // выводим сообщение
        return; // выходим из функции
    }

    let time = deadline;
    const interval = setInterval(() => {
        Date1 = new Date;;
        console.log(Date1);
    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло')
    }, deadline * 1000)
};

const deadline = 30;
timer(deadline);

//Задание 5

const a = 0;

function calling() {
    console.log('Звоню!')
};

const beeps = (callback) => {
	setTimeout(() => { 
        let horn = 'Идут гудки...';
          callback(horn);
    }, 1000);
};

function talk() {
    console.log('Разговор')
}

let horn = beeps(a, talk);

calling();
beeps();
talk();
