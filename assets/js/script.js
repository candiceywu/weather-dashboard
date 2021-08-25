var searchTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = $('#search-form');
var searchListEl = $('#search-list'); // for appending cities
var searchBtn = $('#search-button');
var citiesArray = [];



//moment.js for top of page
var today = moment();
$("#current-city-date").text(today.format("MMMM Do, YYYY"));

// //moment.js to show next 5 days
// var day1 = moment().add(1, 'days');
// $("#day-1").text(day1.format("MMMM Do"));

// var day2 = moment().add(2, 'days');
// $("#day-2").text(day2.format("MMMM Do"));

// var day3 = moment().add(3, 'days');
// $("#day-3").text(day3.format("MMMM Do"));

// var day4 = moment().add(4, 'days');
// $("#day-4").text(day4.format("MMMM Do"));

// var day5 = moment().add(5, 'days');
// $("#day-5").text(day5.format("MMMM Do"));



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

        // print to the page
        searchListEl.append(searchListItemEl);
    }
}

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

    // print to the page
    searchListEl.append(searchListItemEl);
    var citySearch = $("#search-input").val();
    citiesArray.push(citySearch);
    localStorage.setItem("city", JSON.stringify(citiesArray));

    // clear the form input element after entry
    $('input[name="search-input"]').val('');

}

// event delegation
searchFormEl.on('submit', handleFormSubmit);

init();



// fetch // must log in to create ID key (API key is your login a3837629950be0192cb4fdcba56908b4
// )


//call current day: 

var url = "api.openweathermap.org/data/2.5/weather?q=" + citSearch + "&appid=a3837629950be0192cb4fdcba56908b4"

fetch(url)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    var lon = data.coord.lon;
    var lat = data.coord.lat;
})

var url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely&appid=a3837629950be0192cb4fdcba56908b4"

fetch(url)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})

// //from mini-project

// function searchApi(query, format) {
//   var locQueryUrl = 'https://www.loc.gov/search/?fo=json';

//   if (format) {
//     locQueryUrl = 'https://www.loc.gov/' + format + '/?fo=json';
//   }

//   locQueryUrl = locQueryUrl + '&q=' + query;

//   fetch(locQueryUrl)
//     .then(function (response) {
//       if (!response.ok) {
//         throw response.json();
//       }

//       return response.json();
//     })
//     .then(function (locRes) {
//       // write query to page so user knows what they are viewing
//       resultTextEl.textContent = locRes.search.query;

//       console.log(locRes);

//       if (!locRes.results.length) {
//         console.log('No results found!');
//         resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
//       } else {
//         resultContentEl.textContent = '';
//         for (var i = 0; i < locRes.results.length; i++) {
//           printResults(locRes.results[i]);
//         }
//       }
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// }

// function handleSearchFormSubmit(event) {
//   event.preventDefault();

//   var searchInputVal = document.querySelector('#search-input').value;
//   var formatInputVal = document.querySelector('#format-input').value;

//   if (!searchInputVal) {
//     console.error('You need a search input value!');
//     return;
//   }

//   searchApi(searchInputVal, formatInputVal);
// }

// searchFormEl.addEventListener('submit', handleSearchFormSubmit);

// getParams();