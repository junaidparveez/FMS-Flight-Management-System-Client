// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Content from './pages/content';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <Content /> 
//       </header>
//     </div>
//   );
// }




// export default App

import React from "react";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routes"; // Import the router
import "./App.css"; 

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;

