let SearchBtn = document.querySelector('.search button')

let weatherImg = document.querySelector('.weather-img')






SearchBtn.addEventListener('click', () => {

    let SearchText = document.querySelector('.search input').value
    async function WeatherCheck() {
        // let SearchText = document.querySelector('.search input').value
        let ApiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${SearchText}?unitGroup=metric&key=N9N8KUZHBDYB84PJ6ERSGBNVD&contentType=json`;
        try {
            const response = await fetch(ApiUrl);
            const data = await response.json();
    
            console.log(data);
            document.querySelector(".city").innerHTML = data.address
            document.querySelector(".temp").innerHTML = data.currentConditions.temp + "℃"
            document.querySelector(".humidity").innerHTML = data.currentConditions.humidity + "%"
            document.querySelector(".wind-speed").innerHTML = data.currentConditions.windspeed + "km/h"
    
    
            let weatherIcon = data.currentConditions.conditions
    
    
            if (weatherIcon === 'rain') {
                weatherImg.src = "photos/rain.png"
            }
            else if (weatherIcon === 'cloudy' || weatherIcon === 'Overcast') {
                weatherImg.src = "photos/cloud.png"
            }
            else if (weatherIcon === 'clear') {
                weatherImg.src = "photos/clear.png"
            }
            else if (weatherIcon === 'Partially cloudy') {
                weatherImg.src = "photos/cloudy.png"
            }
            else if (weatherIcon === 'snowy') {
                weatherImg.src = "photos/snow.png"
            }
    
            console.log(weatherIcon)
    
        }
        catch (error) {
            console.error("error fetching weather data:", error)
        }
    
    }
    WeatherCheck();
})


SearchBtn.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        let SearchText = document.querySelector('.search input').value
        WeatherCheck();
    }
});















// let weather = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/$Bangalore?unitGroup=metric&key=N9N8KUZHBDYB84PJ6ERSGBNVD&contentType=json";

// async function weathercheck() {
//     try {
//         const response = await fetch(weather);

//         const data = await response.json();
//         console.log(data);
//         console.log(data.address);
//           console.log(data.currentConditions.windspeed)
//     } catch (error) {
//         console.error("Error fetching the weather data:", error);
//     }
// }

// // To actually execute the function, make sure to call it:
// weathercheck();

