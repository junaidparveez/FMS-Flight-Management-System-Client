import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './pages/content';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <h1>Flight Reservation System</h1> */}
      <Content /> 
      </header>
    </div>
  );
}




export default App
