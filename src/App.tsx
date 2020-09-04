import React from "react";
import "./App.css";
import Numbers from "./numbers/Numbers";
import Navbar from "./Navbar/Navbar";
import MapView from "./MapView/MapView";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
      <Navbar></Navbar>
      <main>
        
          <Switch>
            <Route path="/" exact={true}>
              <MapView />
            </Route>
            <Route path="/numbers">
              <Numbers />
            </Route>
          </Switch>

        {/* <Numbers></Numbers>
        <MapView></MapView> */}
      </main>
      </Router>

    </div>
  );
}

export default App;
