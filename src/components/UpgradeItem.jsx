import React from 'react'

export default function UpgradeItem({addFactor, price, handleUpgradeClick}) {
  return (
    <div>
    <h2>Upgrade clicks +{addFactor}</h2>
    <h3>Price : {price}</h3>
    <button onClick={handleUpgradeClick}>Upgrade</button>
    <h2>{price}</h2>
    </div>

  )
}
