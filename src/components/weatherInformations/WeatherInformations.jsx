function WeatherInformations({ weather }) {
    console.log(weather);

    return (
        <div>
            <h2>{weather.name}</h2>
            <div>
                <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                    alt="Imagem representando o clima, como nublado, ensolarado ou chuvoso"
                />
            </div>
            <p>{Math.round(weather.main.temp)}ºC</p>
        </div>
    );
}

export default WeatherInformations;
