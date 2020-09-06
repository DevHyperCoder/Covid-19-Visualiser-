import React from "react";
import "./App.css";
import Numbers from "./numbers/Numbers";
import Navbar from "./Navbar/Navbar";
import MapViewWrapper from "./MapViewWrapper/MapViewWrapper";
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
              <MapViewWrapper/>
            </Route>
            <Route path="/numbers">
              <Numbers />
            </Route>
          </Switch>
      </main>
      </Router>

    </div>
  );
}

export default App;
