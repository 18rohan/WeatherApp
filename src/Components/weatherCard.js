import "../CSS/Home_CSS.css";
import '../CSS/WeatherCard_CSS.css';
const WeatherCard = (props) => {
	return (
		<div className="WeatherCard">
			<div className="row-card">
				<div className="col card-column">
				<div className="row row-card">
				<h4>Friday</h4>
				<h4>23ºc</h4>
				</div>
				<div className="row">
				
				</div>
				</div>
				<div className="col card-column2">
				<h3>Friday</h3>
				<h3>23ºc</h3>
				</div>
			</div>
		</div>
	);
};

export default WeatherCard;
