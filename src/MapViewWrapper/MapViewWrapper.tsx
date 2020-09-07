import React from "react";
import MapView from "../MapView/MapView";

interface MyProps {
    
}

interface MyState{
    json:any
}

export default class MapViewWrapper extends React.Component <MyProps,MyState>{
    constructor(props:any){
        super(props);
        this.state={
            json:"",
        };
    }

    async componentDidMount(){
        const re = await fetch("http://covid19-india-adhikansh.herokuapp.com/states")
        const json = (await re.json()).state

        this.setState({json:json})
    }
  render() {
    return (
      <div>
        <MapView json={this.state.json}/>
      </div>
    );
  }
}
