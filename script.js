
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




console.log(weatherURL);


fetch(weatherURL);

















// SearchBtn.on('click',function(event){
//     event.preventDefault();
//     console.log("");
//     var userLocation = $(this).
// })