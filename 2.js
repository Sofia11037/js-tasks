// Задание 1

// Создать произвольную переменную, присвоить ей значение. C помощью if написать условие: если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let a = 'hidden';

if (a === 'hidden') {
    a = 'visible';
} else {
    a = 'hidden';
}

// Задание 2

/* Создать переменную и присвоить ей число.
Записать условие:
- если переменная равна нулю, присвоить ей 1;
- если меньше нуля - строку “less then zero”;
- если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись). */

let number = 16;

if (number === 0) {
    number = 1;
} else if (number < 0) {
    number = 'less then zero';
} else {
    number = number * 10;   
}

// Задание 3

// Запросите у пользователя число и запишите его в переменную. 
// (Не забывайте, что от пользователя мы всегда получаем строку).
// Создайте переменную-результат и присвойте ей значение: если введенное пользователем число меньше 5, то результат будет '0', если больше -  '1'. Выведите результат в консоль.
// Выполните это задание, используя тернарный оператор (: ?)

let userNumber = prompt('Пожалуйста, назовите число.', '');

let result = (userNumber < 5) ? '0' : '1';

console.log(result);

// Задание 4

// Попросить пользователя ввести одно число, следом - второе число. Вывести в консоль максимальное из чисел (наибольшее) с текстом: Большее число: 7 (вместо 7 будет максимальное число из введенных пользователем).
// * предусмотреть вариант ввода одинаковых чисел

let firstNumber = prompt('Пожалуйста, введите число.', '');

let secondNumber = prompt('Пожалуйста, введите второе число.', '');

if  (firstNumber > secondNumber) {
    console.log('Большее число: ' + firstNumber);
} else if (firstNumber < secondNumber){
    console.log('Большее число: ' + secondNumber );
} else {
    console.log('Числа равны')
}

// Задание 5

//   Определить, является ли введенное пользователем число num1 кратным введенному числу num2. Обе переменные запрашиваем у пользователя, ответ выводим в консоль.

let num1 = prompt('Пожалуйста, введите первое число.', '');

let num2 = prompt('Пожалуйста, введите второе число.', '');

if (num1 % num2) {
    console.log('false');
} else {
    console.log('true');
}   

// Задание 6

// Запросить у пользователя средний балл, записать в переменную.
// Если средний балл 1-4 - вывести в консоль "Двоечник, иди учись!", если 5-8 - "Неплохо, но давай еще поднажмем!", если 9-10 - "Ого, да ты настоящий отличник!" (можно другие фразы - по желанию).

let grade = prompt('Каков Ваш средний балл?', '');

if (grade < 4) {
    console.log('Двоечник, иди учись!');
} else if (grade < 8) {
    console.log('Неплохо, но давай еще поднажмём!');
} else {
    console.log('Ого, да ты настоящий отличник!');
}

// Задание 7

// Запросить у пользователя ответы на 2 вопроса:
// - балл за экзамен (от 0 до 100)
// - количество выполненных проектов (от 0 и больше)
// Вывести в консоль общий выпускной балл в соответствии с этими значениями:
// - 100, если балл за экзамен более 90 или количество проектов более 10.
// - 90, если балл за экзамен более 75 и количество проектов не менее 5.
// - 75, если балл за экзамен более 50 и количество проектов не менее 2.
// - 0 во всех других случаях.

let exam = prompt('Каков Ваш балл за экзамен? (от 0 до 100)', '');

let projects = prompt('Сколько проектов Вы выполнили? (от 0 и больше)', '');

if (exam > 90 || projects > 10) {
    console.log('Ваш общий выпускной балл: 100');
} else if (exam > 75 && projects > 5) {
    console.log('Ваш общий выпускной балл: 90');
} else if (exam > 50 && projects > 2) {
    console.log('Ваш общий выпускной балл: 75');
} else {
    console.log('Ваш общий выпускной балл: 0');
}

// Задание 8

// День аренды автомобиля стоит $40. При аренде на 7 или больше дней вы получаете общую итоговую скидку $50. Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20.
// Количество дней, на которые нужно арендовать авто, запрашиваются с помощью prompt. Напишите программу, рассчитывающую общую стоимость аренды на запрашиваемое количество дней.

let amountOfDays = prompt('На сколко дней Вы хотите арендовать авто?', '');

let totalRentalPrice = amountOfDays * 40;

if (amountOfDays > 7) {
    console.log(totalRentalPrice - 50 + '$'); 
} else if (amountOfDays > 3) {
    console.log(totalRentalPrice - 20 + '$'); 
}

// Задание 9

// Создать переменную и записать в нее число, например 10. 10 раз увеличивать значение этой переменной на 1. Результат вывести в консоль.

for (let a = 10; a < 21; a++) {
    console.log(a);
}

// Задание 10

/* Увеличивая счетчик цикла на 2, нужно 5 раз:
- запрашивать у пользователя ввод числа
- проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10" */

// i = i + 1
// i += 1
// i++


for (let b = 0; b < 10; b += 2) {
    let userNum = prompt ('Введите число');
    if (userNum == 10) {
        console.log('Равно 10');
    } else {
        console.log('Не равно 10');
    }
}

// Задание 11

// Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
// * Задавать количество чисел, которые нужно вывести, при помощи функции prompt.

let quantity = prompt ('Сколько? (от 0 до 100)');

for (let c = 0; c < quantity; c++) {
    console.log(c ** 2);
}

// Задание 12

// Напишите программу, которая выводит в консоль числа от 1 до 100. При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»

for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('«FizzBuzz»');
    } else if (i % 3 == 0) {
        console.log('«Fizz»');
    } else if (i % 5 == 0) {
        console.log('«Buzz»');
    } else {
        console.log (i);
    }
}
