function WeatherInformations({ weather }) {
    console.log(weather);

    // Verificar se o objeto weather está definido
    if (!weather || !weather.main || !weather.weather) {
        return <p>Carregando...</p>; // Renderizar algo enquanto os dados ainda estão sendo carregados
    }

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
