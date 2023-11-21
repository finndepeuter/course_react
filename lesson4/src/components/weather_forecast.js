import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import WeatherApi from '../apis/weather_api';
import { useState, useEffect } from 'react';
import WeatherGraph from './weather_graph';

function WeatherForecast() {
    const [city, setCity] = useState('Antwerp');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const temperature = [];
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

      const output = items.map((item, i) => {
        return (temperature.push(item.main.temp))
        });

    return (
        <div>
            <WeatherGraph data={output}/>
        </div>
    )
}

export default WeatherForecast;
