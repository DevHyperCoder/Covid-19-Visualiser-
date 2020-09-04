import React from 'react';
import './App.css';
import Numbers from './numbers/Numbers';
import Navbar from './Navbar/Navbar'
import MapView from './MapView/MapView'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <Numbers></Numbers>
        <MapView></MapView>
      </main>
    </div>
  );
}

export default App;
