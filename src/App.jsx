import { useState, useRef} from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformations from './components/weatherInformations/WeatherInformations'

function App() {
  const [weather, setwWather] = useState([])
  const inputRef = useRef()


async function searchCity(){
    console.log(inputRef.current.value)
    const city = inputRef.current.value
    const key = "3afbec72cf82612bbddcdc540be74965"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    setwWather(apiInfo.data)
    console.log(apiInfo.data)
}

  return (
    <div>
      <h1>DevClub Previsão do tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade'/>
      <button onClick={searchCity}>Buscar</button>

      <WeatherInformations weather={weather}/>
    </div>
  )
}

export default App
