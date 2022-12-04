let weatherApp= {
    apik: "846850efff277d6a5a225958472fd000",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&appid=" + this.apik
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name}=data;
        const {country}=data;
        const {main}=data.weather;
        const {description}=data.weather;
        const {temp, temp_min, temp_max, pressure, humidity}=data.main;
        const {speed, deg}=data.wind;
        document.querySelector(".city").innerText=name;
        document.querySelector(".country").innerText=country;
        document.querySelector(".weather").innerText=main;
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".temp_min").innerText = temp + "°C";
        document.querySelector(".temp_max").innerText = temp + "°C";
        document.querySelector(".pressure").innerText =
      "Pressure: " + pressure + "atm";
        document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
      document.querySelector(".deg").innerText =
      "Wind degree: " + deg + "degrees";
      
    },
    search: function () {
        this.fetchWeather(document.querySelector(".input-search").value);
      },
};
  document.querySelector(".input-search").addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weatherApp.search();
      }
    });
  