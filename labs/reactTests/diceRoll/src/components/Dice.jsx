// Dice.jsx
import React from "react";
import { diceNames } from "../helper"; //importing the array

function Dice({ number }) {
    const diceWord = diceNames[number]; // e.g., "three"
    const iconClass = `fa-solid fa-dice-${diceWord}`;

    return (
        <div>
            <i className={iconClass} style={{ fontSize: "100px" }}></i>
        </div>
    );
}

export default Dice;
