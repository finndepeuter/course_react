import './App.css';
import { RecoilRoot } from 'recoil';
import TodoList from './components/todo_list';
//import CharacterCounter from './components/recoil_character_counter';
//import Hello from './components/hello';

function App() {
  return (
    // <Hello />
    <RecoilRoot>
      {/* <CharacterCounter /> */}
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
