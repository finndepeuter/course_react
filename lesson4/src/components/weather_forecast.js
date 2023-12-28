import WeatherApi from '../apis/weather_api';
import { useState, useEffect } from 'react';
import WeatherGraph from './weather_graph';
import { PropagateLoader } from 'react-spinners';

function WeatherForecast() {
    const [city, setCity] = useState('Antwerp');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [temperature, setTemperature] = useState([]);
    const [humidity, setHumidity] = useState([]);
    const [pressure, setPressure] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const result = await WeatherApi.getWeatherSlow(city);
            setItems(result.data.list);
            console.log(city, ":", result.data.list)
          } catch (error) {
            console.log('Something went wrong with the weather api.');
          }
          setLoading(false);
        }
        fetchData();
      }, [city]);

      useEffect(() => {
        setTemperature(items.map(entry => entry.main.temp));
        setHumidity(items.map(entry => entry.main.humidity));
        setPressure(items.map(entry => entry.main.pressure));
      }, [items])

    return (
        <div>
          <div>
            <input style={buttonStyle} type="button" value="Antwerp" onClick={() => setCity('Antwerp')} />
            <input style={buttonStyle} type="button" value="Leuven" onClick={() => setCity('Leuven')} />
          </div>
          {loading && (
        <div className="center">
        <div className='sweet-loading'>
          <PropagateLoader
            color={'#3399ff'}
            size={40}
            loading={true}
          />
        </div>
      </div>
      )}
      {!loading && (
        <div className="row">
          <h2>{city}</h2>
          <h3>Temperature</h3>
            <WeatherGraph data={temperature} city={city} />
            <h3>humidity</h3>
            <WeatherGraph data={humidity} city={city}/>
            <h3>Pressure</h3>
            <WeatherGraph data={pressure} city={city}/>
        </div>
      )}
        </div>
    )
}

var buttonStyle = {
  borderRadius: 4,
  height: 50,
  border: 0,
  margin: 5,
  color: "#FFFFFF",
  backgroundColor: "#3388ff"
}

export default WeatherForecast;
