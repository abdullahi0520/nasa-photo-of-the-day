import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Body from './Body'



function App() {
  const [nasaStuff, setNasaStuff] = useState('');

 
  useEffect (() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=wII25VeiCZlXnCadC8n0Js9vormYOY42fkHBWC9c')
  
  .then(res => {
    console.log(res.data)
    setNasaStuff(res.data);
  })
  .catch(err => {
    console.error(err)
  })
},[])
  return (
    <div className="App">
      <p>
        Nasa Photo of the Day <span role="img" aria-label='go!'>🚀</span>!
      </p>
      {nasaStuff && <Body data = {nasaStuff} />}


      
    </div>
  );

  
}


export default App;
