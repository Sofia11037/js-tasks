// Задание 2

// Напишите асинхронную функцию, которая получает список пользователей с сервера jsonplaceholder. Выведите список пользователей на страницу.
// В задании используйте синтаксис async-await и предусмотрите обработку ошибок.


async function funcName() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Ошибка при загрузке данных');
        }
        const users = await response.json();
        allUsers(users);
    } catch (error) {
        console.error(error);
    }
}

function allUsers(users) {
    const userList = document.querySelector('#user-list');
    users.forEach(user => {
        const pUser = document.createElement('p');
        pUser.textContent = `${user.name} (${user.username})`;
        userList.appendChild(pUser);
    });
}

funcName();