let weather={
"apiKey":"62282d631020ae75d9cd9f9ee3a78a2e"
fetchTemperature: function (city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=+city &units=metric&appid=+this.apiKey);
.then((responce)=>responce.json())
.then((data)=> this.displayWeather(data))
}
}
displayWeather: function(data){
    const{name} = data;
    const{icons, discription}= data.weather[0];
    const{temp, humidity}= data.main;
    const{speed}=data.wind;
    console.log(name,icon,discription,temp,humidity,speed)
    document.querySelector(".city").innerText="+ name";
    document.querySelector("+icons").src=""
}

