let city = document.querySelector("input");
let button = document.querySelector("button");
console.log(city.value);

const apiKey = "2a1d37b5b75e83683960f1c8c8f8df36";
 



async function checkWeather(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);
    var data = await response.json();
    console.log(data);
    console.log(data.weather[0].main);

    document.querySelector(".city").innerText = city.value.toUpperCase();
    document.querySelector(".temp").innerText = Math.round(data.main.temp);
    document.querySelector(".humidity").innerText =data.main.humidity + "%";
    document.querySelector(".Wind").innerText = data.wind.speed+"km/h";

    let weatherCondition = document.querySelector(".weather-icon");

    let arr = ["Clear" , "Clouds" ,"Drizzle","Mist","Rain","Snow"];
    arr.forEach((condition)=>{
        if (data.weather[0].main === condition){
            let source = `images/${condition}.png`;
            weatherCondition.setAttribute("src",source) ;

        }
   })
}

button.addEventListener("click",()=>{
    checkWeather(city);
})

 