import React, { useState, useEffect } from "react";

const properties = [
  {
    id: 1,
    name: "uno",
    cost: 100,
  },
  {
    id: 2,
    name: "dos",
    cost: 2200,
  },
  {
    id: 3,
    name: "tres",
    cost: 10000,
  },
  {
    id: 4,
    name: "cuatro",
    cost: 45000,
  },
];

export const Properties = (props) => {
  const [passiveIncome, setPassiveIncome] = useState(1);
  const { money, setMoney, setMoneyMultiplyer } = props;

  useEffect(() => {
    const intervalID = setInterval(() => {
      setMoney((prevMoney) => prevMoney + passiveIncome);
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div className="properties-wrapper">
      <div className="properties">
        {properties.map((property) => {
          const availability =
            money >= property.cost ? "available" : "notAvailable";

          return (
            <div className="property" key={property.id}>
              <h2 className="property-name">{property.name}</h2>
              <button id="buy-property" className={availability}>
                {property.cost}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
