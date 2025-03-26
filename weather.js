let valueSerch = document.getElementById("valueSerch");
let city = document.getElementById("city");
let temperature = document.getElementById("temperature");
let description = document.getElementById("description");
let Humidity = document.getElementById("Humidity");
let clouds = document.getElementById("clouds");
let pressure = document.getElementById("pressure");
let form = document.getElementById("form");
let main = document.querySelector("main");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (valueSerch.value != "") {
        searchweather();
    }
});
let id = "5b8c2d6aa0b3e8d384cf15df0f93863d";
let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + id;
const searchweather = async () => {
    try {
        let responsive = await fetch(url + "&q=" + valueSerch.value);
        let data = await responsive.json();
        console.log(data);
        if (data.cod == 200) {
            city.querySelector("figcaption").innerText = data.name;
            city.querySelector("img").src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
            temperature.querySelector("img").src = `http://openweathermap.org/img/wn/${data.weather[ 0 ].icon}@4x.png`;
            temperature.querySelector("figcaption span").innerText = data.main.temp;
            description.innerText = data.weather[ 0 ].description;
            clouds.innerText = `${data.clouds.all}`;
            pressure.innerText = `${data.main.pressure}`;
            Humidity.innerText = `${data.main.humidity}`;
        } else {
            //false
            main.classList.add("error");
        } setTimeout(() => {
            main.classList.remove("error");
        }, 2000);
        valueSerch.value = "";
    } catch (error) {
        console.log(error);
    }
}
   
const getWeather = () => {
    valueSerch.value = "Abbottabad";
    searchweather();
}
getWeather();
    