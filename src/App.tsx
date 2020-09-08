import React from "react";
import "./App.css";
import Numbers from "./numbers/Numbers";
import MapView from "./MapView/MapView";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

interface Props {}

interface State {
  json: any;
}

export default class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      json: "",
    };
  }
  async componentDidMount() {
    const re = await fetch(
      "https://covid19-india-adhikansh.herokuapp.com/states"
    );
    const json = (await re.json()).state;

    this.setState({ json: json });
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <main className="main">
            <Switch>
              <Route path="/" exact={true}>
                <MapView json={this.state.json} />
              </Route>
              <Route path="/numbers">
                <Numbers json={this.state.json} />
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}
