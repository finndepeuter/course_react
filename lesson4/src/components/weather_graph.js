import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import WeatherApi from '../apis/weather_api';
import { useState, useEffect } from 'react';

function WeatherGraph({data}) {
    const [city, setCity] = useState('Antwerp');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const result = await WeatherApi.getWeatherSlow(city);
            console.log(result.data.list)
            setItems(result.data.list);
          } catch (error) {
            console.log('Something went wrong with the weather api.');
          }
          setLoading(false);
        }
        fetchData();
      }, [city]);

      const lineStyle = {
        fill: 'lightblue',
        stroke: 'blue', // Set your desired color here
        strokeWidth: 2, // Set the line width if needed
      };

    return (
      <div>
        <Sparklines data={data} style={{ width: '300px', height: '150px'}}>
            <SparklinesLine style={lineStyle} />
            <SparklinesReferenceLine type="mean" />
        </Sparklines>
      </div>
    )
}

export default WeatherGraph;