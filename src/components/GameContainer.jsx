import React from "react";
import { useEffect } from "react";
import Clicker from "./Clicker";
import Upgrades from "./Upgrades";
import { useState } from "react";
import Menu from "./Menu";
export default function GameContainer() {
  const localPointsData = localStorage.getItem("points");
  const localLvlData = localStorage.getItem('lvl');
  const initialFactor = 1;
  const [lvl, setLvl] = useState(Number(JSON.parse(localLvlData)));
  const [points, setPoints] = useState(JSON.parse(localPointsData));
  const [addFactor, setAddFactor] = useState(initialFactor);
  const [price, setPrice] = useState(10);

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
  useEffect(() => {
    localStorage.setItem("points", JSON.stringify(points));
    localStorage.setItem('lvl', JSON.stringify(lvl));
  }, [points , lvl]);

  useEffect(() => {
    const localDataPoints = localStorage.getItem("points");
    const localDataLvl = localStorage.getItem('lvl');
    setPoints(JSON.parse(localDataPoints));
    setLvl(JSON.parse(localDataLvl));
  });

  return (
    <div className="wrapper">
      <Clicker
        points={points}
        setPoints={setPoints}
        addFactor={addFactor}
        setAddFactor={setAddFactor}
      />
      <Upgrades
        setAddFactor={setAddFactor}
        setPoints={setPoints}
        points={points}
        price={price}
        setPrice={setPrice}
        addFactor={addFactor}
        UpgradesScale={UpgradesScale}
        lvl={lvl}
        setLvl={setLvl}
      />
      <Menu />
    </div>
  );
}
