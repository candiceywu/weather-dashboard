# weather-dashboard


## Description
This application, Weather Dashboard, was created with the purpose of allowing the user to search for a city in the United States and see its current weather (including temperature, humidity, wind speed, and UV index) as well as the weather for the next five days. Once the user has searched for a city, it is saved in local storage as well as below the search bar so the user knows what cities they've searched for. The user can also click on a previously-searched city to quickly load its current and five-day forecast again. 

## Issues
This project was difficult for me because I could not figure out why my five-day forecast data would not replace one another with a new city search, and instead would add. I tried using .replaceWith and .text, but I think I needed to add in code to remove a child (but could not do this in time). Additionally, the buttons for each saved city below the search bar would display its corresponding weather information only after the user refreshed the page for the first time; it would not activate upon initial launch. Again, I couldn't figure out how to fix this in time.

## Installation
For installation and deployment, please [click here](https://candiceywu.github.io/weather-dashboard/). The application should launch but unfortunately as noted above, the previously-searched cities will not load its corresponding weather data unless the user refreshes the page once upon deployment (and after a city search).

## Usage
The user can easily search for a city to find out the current weather and five-day forecast for that city. The application also saves previous cities that the user searched for, so they can click on the saved city without re-entering text in the search bar to pull up weather information. The following image shows the web application's appearance:

![Candice Wu's Weather Dashboard application includes a search bar on the left with weather information on the right (current and five-day forecast). The cities searched will automatically be saved/displayed on the page so the user can click on the city to reload weather information. The cities will display again if the page is closed/refreshed and opened again.](assets/images/screenshot.png)