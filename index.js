const apiKey = "0e42d7c43428496e19bf8db6321a1af7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector('#cityInput');
const searchBtn = document.querySelector('.btn');
const whetherIcon=document.querySelector(".weather-icon");
async function checkWeather(city) {
        const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
        if(response.status==404){
            document.querySelector('.error').style.display="block";
            document.querySelector('.weather').style.display="none";
        }
        else{
            const data = await response.json();

            console.log(data);
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
            document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
    
            if (data.weather && data.weather.length > 0) {
                const weatherMain = data.weather[0].main;
    
                if (weatherMain === "Clouds") {
                    whetherIcon.src = 'images/clouded.png';
                } else if (weatherMain === "Clear") {
                    whetherIcon.src = 'images/clear.png';
                } else if (weatherMain === "Rain") {
                    whetherIcon.src = 'images/mid.png';
                } else if (weatherMain === "Drizzle") {
                    whetherIcon.src = 'images/storm1.png';
                } else if (weatherMain === "Mist") {
                    whetherIcon.src = 'images/mid2.png';
                }
    
                document.querySelector('.error').style.display="none";
                document.querySelector('.weather').style.display="block";
        }
}
}
searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
