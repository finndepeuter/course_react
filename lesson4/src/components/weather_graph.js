import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import WeatherApi from '../apis/weather_api';
import { useState, useEffect } from 'react';

function WeatherGraph() {
    const [city, setCity] = useState('Antwerp');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    
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

    const sampleData = items;
    return (
        <Sparklines data={sampleData}>
            <SparklinesLine />
            <SparklinesReferenceLine type="mean" />
        </Sparklines>
    )
}

export default WeatherGraph;