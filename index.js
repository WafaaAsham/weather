const apiKey = 'f06972745af04adb8e7204058242506';
const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}`;

const inputField = document.querySelector('input[type="text"]');
const leftBox = document.getElementById('leftbox');
const middleBox = document.getElementById('middlebox');
const rightBox = document.getElementById('rightbox');

inputField.addEventListener('input', async (e) => {
    const town = e.target.value.trim();
    if (town) {
        try {
            const response = await fetch(`${apiUrl}&q=${town}&days=3`);
            const data = await response.json();
            const currentWeather = data.current;
            const forecast = data.forecast.forecastday;

            leftBox.innerHTML = `
                <div class="info1">
                    <p>${currentWeather.condition.text}</p>
                    <p>${town}</p>
                    <p>${currentWeather.temp_c}°C</p>
                    <p>${currentWeather.condition.text}</p>
                    <p>${currentWeather.wind_kph} km/h ${currentWeather.wind_dir}</p>
                </div>
            `;

            middleBox.innerHTML = `
                <div class="info2">
                    <p>${forecast[1].date}</p>
                    <p>${forecast[1].day.maxtemp_c}°C</p>
                    <p>${forecast[1].day.mintemp_c}°C</p>
                    <p>${forecast[1].day.condition.text}</p>
                </div>
            `;

            rightBox.innerHTML = `
                <div class="info3">
                    <p>${forecast[2].date}</p>
                    <p>${forecast[2].day.maxtemp_c}°C</p>
                    <p>${forecast[2].day.mintemp_c}°C</p>
                    <p>${forecast[2].day.condition.text}</p>
                </div>
            `;
        } catch (error) {
            console.error(error);
        }
    }
});