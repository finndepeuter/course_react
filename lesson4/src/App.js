import Greetings from './components/greetings';
import WeatherForecast from './components/weather_forecast';
import WeatherList from './components/weather_list';

function App() {
  return (
    <div>
      <Greetings />
      <WeatherList />
      <WeatherForecast/>
    </div>
  );
}

export default App;
