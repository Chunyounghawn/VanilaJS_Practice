const API_KEY = "222f96af65dd1d2dc12fc173376f3243"

function onGeoSuccess(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child ")
      const city = document.querySelector("#weather span:last-child ")
      console.log(data)
      city.innerText = data.name
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    })
}

function onGeoFailed() {
  alert("Can't find you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFailed)
onGeoSuccess
