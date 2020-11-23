/* eslint-disable jsx-a11y/alt-text */
import "../CSS/Home_CSS.css";
import "../CSS/WeatherCard_CSS.css";
import "../CSS/MainCard_CSS.css";

// importing Components

const MainCard = (props) => {
	
	console.log("ICONS:",props.image)
	const temp = Math.round(props.temperature);

	const dateBuilder = (d) =>{
		let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
		let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();

		return `${day}, ${date} ${month} ${year}`;
	}
	return (
		<div className="row">
		
			<div className="col home-col2">
			<h1 className="forecast">TODAYS FORECAST</h1>
		<div className="MainCard">
		
			<div className="weather-info">
				<div className="city">
					<h1 className="info">{props.city} ({props.country})</h1>
					<h1 className="info info-small">{dateBuilder(new Date())}</h1>
				</div>
				<div className="temperature">
					<h1 className="info temperature-info">{temp}ºC</h1>
					<div className="image-container-card">
			<div className="IconCard">
            <img src={`http://openweathermap.org/img/wn/${props.image}@2x.png`} className="image-conditions"/>
			<h1 className="info">{props.conditions}</h1>
			</div>
			</div>
				</div>
			</div>
			
			
		</div>
		<div className="row">
				<div className="col home-col">
					<h1 className="info">Feels like: {Math.round(props.feelslike)}ºC</h1>
				</div>
				<div className="col home-col">
					<h1 className="info">Humidity: {Math.round(props.humidity)}%</h1>
				</div>
		</div>
		<div className="row">
				<div className="col home-col">
					<h1 className="info">Max Temp: {Math.round(props.tempMax)}ºC</h1>
				</div>
				<div className="col home-col">
					<h1 className="info">Min Temp: {Math.round(props.tempMin)}ºC</h1>
				</div>
		</div>
		<div className="row">
				<div className="col home-col">
					<h2 className="info">Wind: {Math.round(props.WindSpeed)} Km/hr</h2>
				</div>
				<div className="col home-col">
					<h1 className="info">Pressure: {Math.round(props.Pressure)}</h1>
				</div>
		</div>
		</div>
		</div>
		
	);
};

export default MainCard;



