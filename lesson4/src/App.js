import Greetings from './components/greetings';
import WeatherForecast from './components/weather_forecast';
import WeatherGraph from './components/weather_graph';
import WeatherList from './components/weather_list';

function App() {
  return (
    <div>
      <Greetings />
      <WeatherList />
      <WeatherForecast/>
      <WeatherGraph/>
    </div>
  );
}

export default App;
