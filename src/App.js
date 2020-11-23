import React,{useState} from 'react';
import './App.css';
// import WeatherCard from './Components/weatherCard';
import MainCard from './Components/MainCard';

// importing Pages
// import Home from './Pages/Home';
import './CSS/Home_CSS.css';

const api = {
  key :'37b16f7c9c4b32ad68b9638a76b1cbba',
  base:"https://api.openweathermap.org/data/2.5/"

}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  


  const search = event => {
    if(event.key === 'Enter'){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);   
          
        setQuery('');
        console.log(result)
      });
    }

}

  return (
    <div className="App">
    <div className="overlay">
    <div className="home">
		<div className="overlay">
			<div className="container">
				<div className="row home-row">
					<div className="image-container">
					<h1>Weather App</h1>
					<img src="images/Icon.png" alt="weather" className="weather-icon"/>	
					</div>
				</div>
				<input 
							placeholder="Search.."
							className="input-field"
              onChange={e=>setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
              


							/>
				
          
					  {(typeof weather.main != 'undefined') ? (
              <MainCard city={weather.name} country={weather.sys.country} humidity={weather.main.humidity} tempMax={weather.main.temp_max} tempMin={weather.main.temp_min} WindSpeed={weather.wind.speed} Pressure={weather.main.pressure} temperature={weather.main.temp} image={weather.weather[0].icon} conditions={weather.weather[0].main} feelslike={weather.main.feels_like} />
            ) : ('')} 
						
				


					</div>
				</div>
			</div>
			</div>
		</div>
     
  );
}

export default App;
