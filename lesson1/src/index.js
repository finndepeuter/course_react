import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Hello from './components/hello'
// import Letter from './components/letter'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

// <div className="App">
  //     <Hello target="Batman"/>
  //     <Hello target="Bono"/>


  //     <Letter bgcolor="#58B3FF">A</Letter>
  //     <Letter bgcolor="#FF605F">E</Letter>
  //     <Letter bgcolor="#FFD52E">I</Letter>
  //     <Letter bgcolor="#49DD8E">O</Letter>
  //     <Letter bgcolor="#AE99FF">U</Letter>
      
  //   </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
