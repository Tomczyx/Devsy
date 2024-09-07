import React, { useState } from "react";

export default function Upgrades({
  setAddFactor,
  points,
  setPoints,
  addFactor,
}) {
  const [UpgradesScale, setUpgradesScale] = useState([
    {
      lvl: 0,
      price: 10,
      addFactor: 2,
    },
    {
      lvl: 1,
      price: 20,
      addFactor: 3,
    },
    {
      lvl: 2,
      price: 30,
      addFactor: 4,
    },
  ]);
  const [lvl, setLvl] = useState(0);
  const handleUpgradeClick = () => {
    if (points >= UpgradesScale[lvl].price) {
      setAddFactor(UpgradesScale[lvl].addFactor);
      setPoints(points - UpgradesScale[lvl].price);
      setLvl(lvl + 1);
    } else {
      alert("Not enough points");
    }
  };
  return (
    <div>
      <div className="upgrade-box">
        <h2>Upgrade clicks +{addFactor}</h2>
        <h3>Price : {UpgradesScale[lvl].price}</h3>
        <button onClick={handleUpgradeClick}>Upgrade</button>
        <h2>{UpgradesScale[lvl].price}</h2>
      </div>
    </div>
  );
}
