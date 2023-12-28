import WeatherApi from '../apis/weather_api';
import { useState, useEffect } from 'react';
import WeatherGraph from './weather_graph';

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

      // const output = items.map((item, i) => {
      //   return (temperature.push(item.main.temp))
      //   });

      //   const getTemperatureData = () => items.map(entry => entry.main.temp);
      //   console.log("temperatures" , getTemperatureData());
      //   const getHumidityData = () => items.map(entry => entry.main.humidity);
      //   const getPressureData = () => items.map(entry => entry.main.pressure); 

    return (
        <div>
          <h3>Temperature</h3>
            <WeatherGraph data={temperature} />
            <h3>humidity</h3>
            <WeatherGraph data={humidity} />
            <h3>Pressure</h3>
            <WeatherGraph data={pressure} />
        </div>
    )
}

export default WeatherForecast;
