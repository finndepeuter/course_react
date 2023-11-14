import './App.css';

import { students } from './data';
import { ListArray } from './components/lists';
import { ListMap } from './components/lists';
import Counter from './components/counter';
import LightningCounter from './components/lightning_counter';
import ControlledComponent from './components/controlled_component';
import Form from './components/form';
import Accordion from './components/accordion';
import Calculator from './components/calculator';
import BmiCalculator from './components/bmi_calculator';

function App() {
  return (
    <div>
    <div>
      <Accordion/>
      <br/>
      <Form/>
      <br/>
      <ControlledComponent/>
      <br/>
      <LightningCounter/>
      <br/>
      <Counter/>
      <br/>
      <ListArray students={students} />
      <ListMap students={students} />
    </div>
    <div>
      <Calculator></Calculator>
      <br/>
      <BmiCalculator></BmiCalculator>
    </div>
    </div>
);
}

export default App;
