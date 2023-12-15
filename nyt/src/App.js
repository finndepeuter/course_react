import './App.css';
import {RecoilRoot} from 'recoil';
import NewsReader from './components/news_reader';

function App() {
  return (
    <RecoilRoot>
    <NewsReader />
    </RecoilRoot>
  );
}

export default App;