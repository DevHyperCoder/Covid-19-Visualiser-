import React from 'react';
import './App.css';
import Numbers from './numbers/Numbers';
import Navbar from './Navbar/Navbar'
import MapView from './MapView/MapView'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Numbers></Numbers>
      <MapView></MapView>
    </div>
  );
}

export default App;
