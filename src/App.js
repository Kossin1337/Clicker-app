import React, { useState } from "react";
import "./App.css";
import { Properties } from "./comonents/Properties";
import { ClickerButton } from "./comonents/ClickerButton";

export function App() {
  const [money, setMoney] = useState(0);
  const [moneyMultiplyer, setMoneyMultiplyer] = useState(1);

  return (
    <div className="clicker-app">
      <Properties
        money={money}
        setMoney={setMoney}
        setMoneyMultiplyer={setMoneyMultiplyer}
      />
      <ClickerButton
        money={money}
        setMoney={setMoney}
        moneyMultiplyer={moneyMultiplyer}
      />
    </div>
  );
}
