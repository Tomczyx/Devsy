import React, { useState } from "react";

export default function Clicker({
  points,
  setPoints,
  addFactor,
  setAddFactor,
}) {
  const handleClick = () => {
    setPoints(points + addFactor);
  };

  return (
    <>
      <button onClick={handleClick}>Clicker</button>
      <h2>{points}</h2>
    </>
  );
}
