
const api = {
    key: "fcc8de7015bbb202209bbf0261babf4c", //use your own key
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
    }
}

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

// invalid location will not be handled but can be done by simply checking weather.main.temp value and if else condition 
function displayResults(weather) {
    document.querySelector('.search-box').style.display = 'none';
    let temp = document.querySelector('#temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}`;
}

