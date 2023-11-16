import { useState, useEffect } from 'react';

import WeatherItem from './weather_item';
import WeatherApi from '../apis/weather_api';

function WeatherList() {
  const [city, setCity] = useState('Antwerp');
  const [items, setItems] = useState([]);

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
      <div className="row">
        {output}
      </div>
    </section>
  );
}

export default WeatherList;