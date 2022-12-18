let now = new Date();

let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];

let h4 = document.querySelector("h4");
h4.innerHTML = `${day}, ${date} ${month} ${year} <br /> ${hour}:${minutes}`;

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-bar");
  let h1 = document.querySelector("h1");

  let apiKey = "185f6f704c6636bccd3c9a5f8a6b1df5";

  if (cityInput.value) {
    let city = `${cityInput.value}`;
    h1.innerHTML = `${city}`;

    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    function showTemperature(response) {
      let h2 = document.querySelector("h2");
      h2.innerHTML = `${Math.round(response.data.main.temp)}°`;
    }

    axios.get(`${apiURL}`).then(showTemperature);
  }
}
//API
function showPosition(position) {
  let lat = Math.round(position.coords.latitude);
  let lng = Math.round(position.coords.longitude);
  let apiKey = "185f6f704c6636bccd3c9a5f8a6b1df5";

  let location = `lat=${lat}&lon=${lng}`;
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?${location}&units=metric&appid=${apiKey}`;
  function showTemperature(response) {
    let h2 = document.querySelector("h2");
    h2.innerHTML = `${Math.round(response.data.main.temp)}°`;
    let currentCity = response.data.name;
    console.log(currentCity);
    let h1 = document.querySelector("h1");
    h1.innerHTML = `${currentCity}`;
  }
  axios.get(`${apiURL}`).then(showTemperature);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);

let citySearch = document.querySelector("#search");
citySearch.addEventListener("submit", search);

function farenheitChange(event) {
  let h2f = document.querySelector("h2");
  h2f.innerHTML = `77°`;
}

let farenheit = document.querySelector("#f");
farenheit.addEventListener("click", farenheitChange);

function celsiusChange(event) {
  let h2c = document.querySelector("h2");
  h2c.innerHTML = `16°`;
}

let celsius = document.querySelector("#c");
celsius.addEventListener("click", celsiusChange);
