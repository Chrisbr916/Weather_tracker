
var searchButtonEl = document.querySelector('#searchButton');
var searchRequestEl = document.querySelector('#search');
var currentWeatherEl = document.querySelector('#currentWeather');
var cityEl = document.getElementById('city');
var tempEl = document.getElementById('temperature');
var dateEl = document.getElementById('date');
var weatherIconEl = document.getElementById('weatherIcon');
var windEl = document.getElementById('wind');
var humidityEl = document.getElementById('humidity');
var uvIndexEl = document.getElementById('uvIndex');
var historyEl = document.getElementById('history');
var fiveDayForecastEl = document.getElementById('5DayForecast');
var citiesArr = JSON.parse(localStorage.getItem('city')) || [];

function currentLocation(city) {
    var APIKey = "f43a73be09a020c8ebdcb66f12500bb5";

    var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    fetch(queryURL)
    .then(function(response){
        if (response.ok) {
            console.log(response){
                response.json().then(function(date){
                    console.log(date);
                    displayWeather(date)
                });
            }
        }
    });
};


function clickHandler(event) {
    event.preventDefault();

    var city = searchRequestEl.ariaValueMax.trim();
    while(fiveDayForecastEl.firstChild){
        fiveDayForecastEl.removeChild(fiveDayForecastEl.firstChild);
    }


if (city) {
    currentLocation(city);
    citiesArr.push(city)
    localStorage.setItem('city', JSON.stringify(citiesArr));
    cityHistory();
    searchRequestEl.value = '';
} else {
    alert('Enter a Valid city');
}

}


cityHistory();

function cityHistory(){
    historyEl.innerHTML = "";
    for (var i = 0; i < citiesArr.length; i++) {
        var button = document.createElement('button');
        button.textContent = citiesArr[i];
        historyEl.append(button);
        console.log("first")
        console.log(citiesArr[i]);

        button.addEventListener('click', function(){

            while(fiveDayForecastEl.firstElementChild){
                fiveDayForecastEl.removeChild(fiveDayForecastEl.firstElementChild)
            }
            currentLocation($(this).text())
        })
    }
}





console.log(weatherURL);


fetch(weatherURL);

















// SearchBtn.on('click',function(event){
//     event.preventDefault();
//     console.log("");
//     var userLocation = $(this).
// })