// import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import Letter from './components/letter';
import Card from './components/color_card';
import MultiplicationTable from './components/multiplication_table';
import Rater from './components/rater';
import ProgressBar from './components/progress_bar';
function App() {
  return (
    <div className="App">
      <Card color="#58B3FF"/>
      <br/>
      <Card color="#FF605F"/>
      <Hello target="Batman"/>
      <Hello target="Iron man"/>

      <Letter bgcolor="#58B3FF">A</Letter>
      <Letter bgcolor="#FF605F">E</Letter>
      <Letter bgcolor="#FFD52E">I</Letter>
      <Letter bgcolor="#49DD8E">O</Letter>
      <Letter bgcolor="#AE99FF">U</Letter>

      <br/>
      <MultiplicationTable number="9" />
      <br />
      <MultiplicationTable number="3" />
      <br/>

      <Rater rating="7" max="8"/>
      <br/>
      <ProgressBar percentage="75" color="#ce4b99"/>
      <br/>
      <ProgressBar percentage="15" color="#ce1b29"/>
      <br/>
      <ProgressBar percentage="65" color="#125b69"/>
    </div>
  );
}

export default App;
