function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let discriptionElement = document.querySelector("#discription");
  temperatureElement.innerHTML = math.round(responce.data.main.temp);
  cityElement.innerHTML = responce.data.name;
  discriptionElement.innerHTML = responce.data.weather[0].discription;
  humidityElement.innerHTML = responce.data.main.humidity;
  wind.innerHTML = math.round(responce.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
  iconElement.setAttribute("title", response.data.weather[0].description);
  tempElement.innerHTML = math.round(response.data.main.temp);

getFortcast(response.data.coord);
}
function search(city) {
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query={city}&key={c4bta66aea564d54oe4a3a79c0a4f28c}&units=metric";

 axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}
   
axios.get('/api/xyz/abcd')
  .catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }

  });


axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });
function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");

  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
}
function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

search("New York");
function search(location) {
  let searchInput = document.querySelector("#search-input");
  searchInput.value = location;
  searchInput.focus();
  };
  function displayCelsiusTemperature() {
    let searchInput = document.querySelector("#search-input");
    let searchResult = document.querySelector("#search-result");
    let temperature = document.querySelector("#temperature");
    let celsius = document.querySelector("#celsius");
    let fahrenheit = document.querySelector("#fahrenheit");
    let location = searchInput.value;
    let url = "https://api.openweathermap.org/data/2.5/oncall?"
  }
  function displayFahrenheitTemperature() {
    let temperature = document.querySelector("#temperature");
    let celsius = document.querySelector("#celsius");
    let fahrenheit = document.querySelector("#fahrenheit");
    let location = searchInput.value;
    let url = "https://api.openweathermap.org/data/2.5/oncall?"
  }
  function displayCelsiusTemperature() {
    let temperature = document.querySelector("#temperature");
    let celsius = document.querySelector("#celsius");
    let fahrenheit = document.querySelector("#fahrenheit");
    let location = searchInput.value;
    let url = "https://api.openweathermap.org/data/2.5/oncall?"
  }
