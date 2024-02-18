let weather = {
    apiKey : "a33f3a7f39237ca9cea330ae01cc8a55",
    fetchWeather : function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
         +   city
         + " &units=metric&appid=" 
         + this.apiKey
            ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon , description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,description,temp,humidity,speed)
        document.querySelector(".city").innerText = "Weather in "+ name;
        document.querySelector(".temp").innerText= temp + "°C";
        document.querySelector(".description").innerText= description;
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".wind").innerText= "Wind Speed : " + speed + "km/h";
        // document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')" --- use this to add random background according to city name
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".bt").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("Lucknow");