import { useState } from "react";
import Logo from "./assets/logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="upper-card">
        <div className="left">
          <h3>My balance</h3>
          <h1>Sum</h1>
        </div>
        <div className="right">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="lower-card">
        <h1>Spending - Last 7 days</h1>
        <div className="bar-chart"> BAR CHART HERE</div>
        <hr />
        <div className="lower-card-bottom">
          <div className="left">
            <h3>Total this month</h3>
            <h1>Sum</h1>
          </div>
          <div className="right">
            <p>Percent gain</p>
            <h3>from last month</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
