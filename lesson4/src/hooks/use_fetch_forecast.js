import { useEffect, useState } from 'react';
import WeatherApi from '../apis/weather_api';

export default function useFetchForecast (city) {
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

  return {
    items,
    loading,
  };
};