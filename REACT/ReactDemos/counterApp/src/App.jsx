//foundation
import{useState} from "react";

//function
const App =() => {
    const [days, setDays] = useState(303)

    const handleClick = () =>{
        return setDays(days-1)
    }
// render the app
    return(
<div className="App">
    <h1> Birthday Party Count Down App</h1>
    <div className="card">
        <button onClick={() => setDays(days => days -1)} >
            Days remaining until Connor's Birthday party are: {days}
        </button>
    </div>
</div>
         )
}

//export
export default App;