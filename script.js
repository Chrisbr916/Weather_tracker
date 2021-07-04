var APIKey = "f43a73be09a020c8ebdcb66f12500bb5";
var printedLocation = $('#LocationsList');
var SearchBtn = $('.Search');

var city;

var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

console.log(weatherURL);


fetch(weatherURL);

















// SearchBtn.on('click',function(event){
//     event.preventDefault();
//     console.log("");
//     var userLocation = $(this).
// })