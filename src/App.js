import React, { useState, useEffect } from "react";
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Home';
import './App.css';

const App = () => {

  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [darkMode, setDarkMode] = useState(storedDarkMode);
  
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);

  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
   
  }, [darkMode]);
  
 


  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
     
     <Home toggle={toggleDarkMode} dark={darkMode}/>
    <Sidebar />   
    
    
    </div>
  )
}

export default App;
