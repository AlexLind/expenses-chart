import { useState } from "react";
import Logo from "./assets/logo.svg";
import "./App.css";
import data from "./assets/data.json";

function App() {
  const sum = data.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
  let maxAmount = 0;
  data.forEach((item) => {
    if (item.amount > maxAmount) {
      maxAmount = item.amount;
    }
  });
  data.forEach((item) => {
    item.height = Math.floor((item.amount / maxAmount) * 120) + "px";
  });
  console.log(sum);

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
        <div className="bar-chart">
          {data.map((item) => {
            return (
              <div className="bar">
                <div className="bar-money-spend">
                  <p className="amount">${item.amount}</p>
                  <div
                    className="bar-box"
                    style={{ height: item.height }}
                  ></div>
                  <p className="day">{item.day}</p>
                </div>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="lower-card-bottom">
          <div className="left">
            <h3>Total this week</h3>
            <h1>${sum}</h1>
          </div>
          <div className="right">
            <h4>+2.4%</h4>
            <h3>from last week</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
