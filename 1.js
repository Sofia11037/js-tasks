//задание 2
// Запросите у пользователя его имя. Выведите в окошке (с помощью функции alert) фразу: Привет, Николай! (вместо Николай должно показываться имя, которое ввел пользователь)
let user = prompt('Ваше имя?');
alert ('Привет, ' + `${user}!`);


//задание 3
// Запросите у пользователя число. Затем запросите степень, в которую нужно возвести это число. Выведите в консоль результат.
let number = prompt('Пожалуйста, назовите число');
let degree = prompt('Назовите степень');
console.log(number ** degree);
