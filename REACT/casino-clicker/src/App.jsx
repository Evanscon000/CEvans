// Import
import React, {useState} from "react";
import './App.css'

// Function
function App(){
    const [count, setCount] = useState(0)
    const [isSeven, setIsSeven] = useState(false)

    const handleClick = () => {
        // create random number
        let newCount = Math.floor(Math.random()*10+1)
        setCount(newCount)
        setIsSeven(newCount === 7)
        console.log("Clicked")
    }

    return (
        <>
        <h1> Welcome to Valhalla</h1>

            {/*user clicks the button*/}
            {/* generate a random number*/}
            <button
                style={
                {visibility: isSeven? "hidden" : "visible"}
                }
            onClick={handleClick}>
                Click Me!!</button>

            <h2>{count}</h2>
            {/*short circuit*/}
            {isSeven && <h1>You Win Big DAWG!!</h1>}

        </>

    )
        }


// Export
export default App;