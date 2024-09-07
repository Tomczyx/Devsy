import React from 'react'
import Clicker from './Clicker'
import Upgrades from './Upgrades'
import { useState } from 'react'
export default function GameContainer() {
    const initialFactor = 1
    const [points,setPoints] = useState(0);
    const [addFactor,setAddFactor] = useState(initialFactor)
    const [price , setPrice] = useState(10)


  return (
    <div className="wrapper">
        <Clicker points={points} setPoints={setPoints} addFactor={addFactor} setAddFactor={setAddFactor}/>
        <Upgrades setAddFactor={setAddFactor} setPoints={setPoints} points={points} price={price} setPrice={setPrice} addFactor={addFactor}/>

    </div>
  )
}
