let weather={
"apiKey":"62282d631020ae75d9cd9f9ee3a78a2e"
 function (city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=+city &units=metric&appid=+62282d631020ae75d9cd9f9ee3a78a2e")
.then((responce)=>responce.json())
.then((data)=> this.displayWeather(data))
}
}
 function (data){
    const{name} = data;
    const{icons, discription}= data.weather[0];
    const{temp, humidity}= data.main;
    const{speed}=data.wind;
    console.log(name,icon,discription,temp,humidity,speed)
    document.querySelector(".city").innerText="+ name";
    document.querySelector("+icons").src=""
}