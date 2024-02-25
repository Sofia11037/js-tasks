const renderCurrent = (data) => {

    const city = document.createElement('p');
    city.className = 'city';
    city.textContent = data.city.name;
    document.querySelector('.data').append(city);

    let now = new Date();
    const time = document.createElement('p');
    time.className = 'time';
    time.textContent = now.toLocaleTimeString('ru-RU');
    document.querySelector('.data').append(time);

    const img = document.createElement('img');
    img.src = data.list[0].weather[0].icon + '.png.crdownload';
    document.querySelector('.weather').append(img);

    const weath = document.createElement('p');
    weath.className = 'weather';
    weath.textContent = data.list[0].weather[0].main;
    document.querySelector('.weather').append(weath);

    const temp = document.createElement('p');
    temp.className = 'temp';
    temp.textContent = `${data.list[0].main.temp} °C`;
    document.querySelector('.weather').append(temp);

    const windy = document.createElement('p');
    windy.className = 'windy';
    windy.textContent = `${data.list[0].wind.speed} m/s`;
    document.querySelector('.wind').append(windy);

}

const renderForecast = (data) => {

    for (let i = 0; i < 40; i += 8) {



        const date = (data.list[i].dt_txt).split(' ');
        const weather = data.list[i].weather[0].icon;
        const temp = data.list[i].main.temp

        const template = `
        <div class="row">
                    <div class="row__date">
                    <p class="date">${date[0]}</p>
                    <p class="time">${date[1]}</p>
                    </div>
                    <div class="row__img"><img src="${weather + '.png.crdownload'}"> </div/>
                    <div class="row__temp">${temp + '°C'}</div>
                </div>
        `

        document.querySelector('#forecast').innerHTML += template;




    }


    // const date = document.createElement('p');
    // date.className = 'date';
    // date.textContent = data.list[8].dt_text;
    // document.querySelector('.row__data').append(date);
}


fetch('https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247&units=metric')
    .then((response) => response.json())
    .then((data) => {
        renderCurrent(data);
        renderForecast(data);
    })