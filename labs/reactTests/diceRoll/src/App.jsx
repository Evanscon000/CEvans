import React, { useState } from "react";
import { useEffect } from "react";
import Dice from "./components/Dice";
import { getRandomNumber } from "./helper";
import './App.css';

function App() {
    const [dice1, setDice1] = useState(getRandomNumber());
    const [dice2, setDice2] = useState(getRandomNumber());
    useEffect(() => {
        console.log("App mounted – useEffect ran once.");
    }, []);


    const rollDice = () => {
        setDice1(getRandomNumber());
        setDice2(getRandomNumber());
    };

    return (
        <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Roll the Dice </h1>
            <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
                <Dice number={dice1} />
                <Dice number={dice2} />
            </div>
            <p style={{ fontSize: "24px", marginTop: "20px" }}>
                Roll = {dice1 + 1} + {dice2 + 1} = <strong>{dice1 + dice2 + 2}</strong>
            </p>
            <button onClick={rollDice} style={{ marginTop: "20px", padding: "10px 20px" }}>
                Roll Again
            </button>
        </div>
    );
}

export default App;
