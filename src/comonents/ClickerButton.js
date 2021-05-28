import React from "react";

export const ClickerButton = (props) => {
  const { money, setMoney, moneyMultiplyer } = props;

  const addMoney = () => {
    setMoney((prevMoney) => prevMoney + moneyMultiplyer);
  };

  return (
    <div className="clicker-btn-wrapper">
      <button className="clicker-btn" onClick={addMoney}>
        {money}$
      </button>
    </div>
  );
};
