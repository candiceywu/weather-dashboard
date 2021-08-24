var searchTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = $('#search-form');
var searchListEl = $('#search-list'); // for appending cities
var searchBtn = $('.btn btn-info');
var citySearch = $("#search-input");


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

//   // clear the form input element
//   $('input[name="search-input"]').val('');
}

// event delegation
searchFormEl.on('submit', handleFormSubmit);


//button clicks, local storage
searchBtn.on("click", function(){
  localStorage.setItem("city", (citySearch.val()));
});


