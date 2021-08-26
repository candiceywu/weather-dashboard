var searchFormEl = $('#search-form');
var searchListEl = $('#search-list'); // for appending cities
var searchBtn = $('#search-button');
var citiesArray = [];



//moment.js for top of page
var today = moment();
$("#current-day").text(today.format("MMMM Do, YYYY"));

// //moment.js to show next 5 days
var day1 = moment().add(1, 'days');
$("#0").text(day1.format("MMMM Do"));

var day2 = moment().add(2, 'days');
$("#1").text(day2.format("MMMM Do"));

var day3 = moment().add(3, 'days');
$("#2").text(day3.format("MMMM Do"));

var day4 = moment().add(4, 'days');
$("#3").text(day4.format("MMMM Do"));

var day5 = moment().add(5, 'days');
$("#4").text(day5.format("MMMM Do"));



//displays what's in local storage back on page
function init() {
    var savedCities = JSON.parse(localStorage.getItem("city"));
    if (!savedCities) {
        return;
    }
    citiesArray = savedCities;
    for (var i = 0; i < citiesArray.length; i++) {
        var searchListItemEl = $(
            '<li class="flex-row justify-space-between align-center p-2 bg-white text-dark">'
        );
        searchListItemEl.text(citiesArray[i]);

    }
}

function handleRemoveItem(event) {
    // convert button we pressed (`event.target`) to a jQuery DOM object
    var btnClicked = $(event.target);

    // get the parent `<li>` element from the button we pressed and remove it
    btnClicked.parent('li').remove();
}


// event delegation
searchFormEl.on('submit', handleFormSubmit);
searchListEl.on('click', '.delete-item-btn', handleRemoveItem);

init();


// logs entry into area under search button
function handleFormSubmit(event) {
    event.preventDefault();
    var searchItem = $('input[name="search-input"]').val();
    if (!searchItem) {
        console.log('Please enter a city.');
        return;
    }

    var searchListItemEl = $(
        '<li class="flex-row justify-space-between align-center p-2 bg-white text-dark">'
    );
    searchListItemEl.text(searchItem);

    // add delete button to remove list item
    searchListItemEl.append(
        '<button class="btn btn-danger btn-small delete-item-btn">X</button>'
    );

    // clear the form input element
    $('input[name="search-input"]').val('');


    // print to the page
    searchListEl.append(searchListItemEl);
    var citySearch = $("#search-input").val();
    citiesArray.push(citySearch);
    localStorage.setItem("city", JSON.stringify(citiesArray));


    //current day: 
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + searchItem + "&appid=a3837629950be0192cb4fdcba56908b4";

    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            var lon = data.coord.lon;
            var lat = data.coord.lat;

            //use api with lon/lat and uv-index info
            var url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&exclude=hourly,minutely&appid=a3837629950be0192cb4fdcba56908b4";

            fetch(url)
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    console.log(data)

                    $("#current-city").text("City: " + searchItem)
                    $("#temperature").text("Temperature: " + data.current.temp + "°F")
                    $("#humidity").text("Humidity: " + data.current.humidity + "%")
                    $("#wind-speed").text("Wind Speed: " + data.current.wind_speed + " mph")
                    $("#uv-index").text("UV-Index: " + data.current.uvi + " of 10")
                    generateFiveDayForecast(data.daily);
                })

        })




}




//5-day forecast 
function generateFiveDayForecast(data) {
    console.log("data-daily", data);
    var fiveDay = $("#five-day-forecast");
    console.log(fiveDay);

    for (let i = 0; i < 5; i++) {
        $(`#${i}`).append("Temperature: " + `<div>${data[i].temp.day + "°F"}</div>`);
        $(`#${i}`).append("Humidity: " + `<div>${data[i].humidity + "%"}</div>`);
        $(`#${i}`).append("Wind Speed: " + `<div>${data[i].wind_speed + " mph"}</div>`);
        $(`#${i}`).append("UV Index: " + `<div>${data[i].uvi + " of 10"}</div>`);

    }

}

// //for weather icon - data.current.weather.id; data[i]/daily[??].weather.id;

// 100-199: http://openweathermap.org/img/wn/01d@2x.png 
// 200-299: http://openweathermap.org/img/wn/11d@2x.png
// 300-399: http://openweathermap.org/img/wn/09d@2x.png
// 500-599: http://openweathermap.org/img/wn/10d@2x.png
// 600-699: http://openweathermap.org/img/wn/13d@2x.png
// 700-799: http://openweathermap.org/img/wn/50d@2x.png
// 801: http://openweathermap.org/img/wn/02d@2x.png
// 802: http://openweathermap.org/img/wn/03d@2x.png
// 803-804: http://openweathermap.org/img/wn/04d@2x.png







