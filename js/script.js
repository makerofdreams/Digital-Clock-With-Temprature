
//calling function after every 1 second 
setInterval(mySeconds, 1000);


function mySeconds() {
    const d = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = document.querySelector('#date');
    date.innerHTML = d.getDate();

    const month = document.querySelector('#month');
    month.innerHTML = d.getMonth() + 1;

    let year = document.querySelector('#year');
    year.innerHTML = d.getFullYear().toString().slice(2, 4);

    let hour = document.querySelector('#hour');
    hour.innerHTML = d.getHours();

    let minutes = document.querySelector('#minutes');
    let trueMinutes = d.getMinutes();
    if (trueMinutes < 10) {
        minutes.innerHTML = '0' + trueMinutes.toString();
    } else {
        minutes.innerHTML = trueMinutes;
    }

    let seconds = document.querySelector('#seconds');
    seconds.innerHTML = d.getSeconds();

    let day = document.querySelector('#day');
    day.innerHTML = days[d.getDay()]

}



