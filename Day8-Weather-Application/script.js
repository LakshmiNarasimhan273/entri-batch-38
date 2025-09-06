async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    // Paste your api key generated from openweather map platform
    const apiKey = "ad6cf3fcd0748b04ad4664ce554c2123";
    const result = document.getElementById("weatherResult");

    // Validation for a proper city name
    if (!city) {
        result.innerHTML =
            `
        <div class="alert alert-warning">Please enter a city name</div>
        `
    }

    result.innerHTML =
        `
    <div class="spinner-border text-primary" role="status"></div>
    `

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        result.innerHTML =
            `
        <h4>${data.name}, ${data.sys.country}</h4>
        <img src="${iconUrl}" />
        <p><strong>${data.weather[0].main}</strong>-${data.weather[0].description}</p>
        <p>🌡️ Temperature : ${data.main.temp}</p>
        <p>💧 Humidity: ${data.main.humidity}</p>
        <p>💨 Wind Speed: ${data.wind.speed}</p>
        `
    } catch (err) {
        result.innerHTML =
            `
        <div class="alert alert-danger">${err.message}</div>
        `
    }
}