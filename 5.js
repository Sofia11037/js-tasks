// Задание 1

// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обработайте случай, если не было введено два параметра.
// Примеры результатов вызова функции:
// sum(2,4); // 6
// sum('d',4); // введенные данные не являются числами
// sum(1, [2]); // введенные данные не являются числами
// sum(1); // введите два параметра
// sum(); // введите два параметра

function sumNumbers(a, b) {
    if (typeof a == 'undefined' || typeof b == 'undefined') {
        alert('введите два параметра');
    } else if (typeof a !== 'number' || typeof b !== 'number') {

        alert('введенные данные не являются числами');
    } else {
        return a + b;
    }
}

// Задание 2    

// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
// "Функция "square" не может быть вызвана без аргумента"

// function square(a) {
//   console.log(a * a)
// }

// square(10) // 100
// square()
// // ДО: NaN
// // ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

function square(a) {
    console.log(a * a);
    if (typeof a == 'undefined') {
        console.error('Uncaught Error: Функция "square" не может быть вызвана без аргумента.');
    }
}

// Задание 3

// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.

let getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

let guessTheNumber = (number) => {
    let RandomNumber = getRandomNumber(1, 10);
    if (number < 0 || number > 10) {
        console.log('Введите число от 1 дот 10');
    } else if (number == RandomNumber) {
        console.log('Вы выиграли');
    } else {
        console.log(`Вы не угадали, ваше число - ${number}, а выпало число ${RandomNumber}`);
    }
}
guessTheNumber(5);
guessTheNumber(8);

// Задание 4

// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

let arr = [5, 4, 3, 8, 0];

function filterFor(arr, a) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

console.log(filterFor(arr, 3.11));


// Задание 5

// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.

const copyArr = arr.map(function(item) {
    return item;
})

console.log(copyArr);


//Задание 6

//Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.

// Проверить работу функции можно на объекте:
// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: 'string',
//   d: 12,
// }

const objectWithNumbers = {
    a: 10,
    b: 20,
    c: 'string',
    d: 12,
}

function sumObjectValues(obj) {
    let sum = 0;
    for (let property in obj) {
        if (typeof obj[property] == 'number') {
            sum = sum + obj[property];
        }
    }
    return sum;
}

console.log(sumObjectValues(objectWithNumbers));