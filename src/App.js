import './App.css';
import Mobile from "./component/Mobile";
import { useState } from "react";
function App() {
  const [display, setDisplay]=useState(1234)
  function incrementDisplay(){
    setDisplay(display+1);
  }
  return (
    <div className="App">
      {/* <h1>Check Sample.js</h1>
      <Mobile brandname="realme" brandprice="12000" offer="90"></Mobile>
      <Mobile brandname="samsung" brandprice="15000"></Mobile>
      <Mobile brandprice="20000"></Mobile> */}
      <button onClick={incrementDisplay}>increase</button>
      <h3>{display}</h3>
    </div>
  ) 
}
export default App;
