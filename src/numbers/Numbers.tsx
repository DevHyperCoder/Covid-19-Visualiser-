import React from "react";

import TableHeader from "../TableHeader";
import TableRow from "../TableData";
import getMap from "../LatLongMap";
import './Numbers.css'
function Numbers({ json }: { json: any }) {
  const map :string[][] = [[]];
  const latLongMap = getMap();

  for (let i = 0; i < json.length; i++) {
    const currElem = json[i];
    console.log(currElem);
    const { name, active, cured } = currElem;

    if (latLongMap.has(name)) {
        map.push([name,active,cured])
    }
  }
  return (
    <div className="container">
        <div className="table-container">
      <h1>Numbers</h1>
      <table>
        <thead>
          <tr>
            <TableHeader
              data={["State", "Active Cases", "Cured Cases"]}
            ></TableHeader>
          </tr>
        </thead>
        <tbody>
          <TableRow data={map}></TableRow>
        </tbody>
      </table>
    </div>
    <p>All data taken from <a href="https:mohfw.gov.in/">mohfw.gov.in</a></p>
    </div>
  );
}

export default Numbers;
