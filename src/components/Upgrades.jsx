import React, { useEffect, useState } from "react";
import UpgradeItem from "./UpgradeItem";

export default function Upgrades({
  setAddFactor,
  points,
  setPoints,
  addFactor,
  price,
  setPrice,
  UpgradesScale,
  lvl,
  setLvl, 
}) {




  const handleUpgradeClick = () => {

    if (lvl >= UpgradesScale.length) {
      alert("Maximum level reached");
      return;
    }

    if (points >= UpgradesScale[lvl].price) {
      setAddFactor(UpgradesScale[lvl].addFactor);
      setPoints(points - UpgradesScale[lvl].price);
      setLvl(lvl + 1);
      setPrice(UpgradesScale[lvl + 1].price);
    } else {
      alert("Not enough points");
    }
  };
  return (
    <div>
      <div className="upgrade-box">

        <UpgradeItem addFactor={addFactor} price={price} handleUpgradeClick={handleUpgradeClick} />

      </div>
    </div>
  );
}
