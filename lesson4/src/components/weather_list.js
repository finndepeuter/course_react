import { useState, useEffect } from 'react';
import { PropagateLoader } from 'react-spinners';

import WeatherItem from './weather_item';
import WeatherApi from '../apis/weather_api';
//import useFetchForecast from '../hooks/use_fetch_forecast';

function WeatherList() {
  const [city, setCity] = useState('Antwerp');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  // als je een errorblokje wilt toevoegen maak je een state aan hier, met if de state checken om iets anders te displayen
  // const [error, setError] = useState(false);

  // const {
  //   items,
  //   loading,
  // } = useFetchForecast(city);

  var paddingStyle = {
    padding: 20
  };

  var buttonStyle = {
    borderRadius: 4,
    height: 50,
    border: 0,
    margin: 5,
    color: "#FFFFFF",
    backgroundColor: "#3388ff"
  }

  // version 1
  // useEffect(async () => {
  //   const result = await WeatherApi.getWeather(city);
  //   console.log(result);
  // });
  
  // version 2
  // useEffect(async () => {
  //   const result = await WeatherApi.getWeather(city);
  //   setItems(result.data.list);
  // });

  // version 3
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await WeatherApi.getWeather(city);
  //     setItems(result.data.list);
  //   };
  
  //   fetchData();
  // }, [city]);

  // version 4
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await WeatherApi.getWeatherError(city);
  //       setItems(result.data.list);
  //     } catch (error) {
  //       console.log('Something went wrong with the weather api.');
  //     }
  //   }
  
  //   fetchData();
  // }, [city]);


  // version 5
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
    return (
      <div key={i} className="columns large-2 medium-4">
        <WeatherItem item={item} city={city} />
      </div>
    )
  });

  return (
    <section style={paddingStyle}>
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
          {output}
        </div>
      )}
    </section>
  );
}

export default WeatherList;