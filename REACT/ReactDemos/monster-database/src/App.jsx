// Foundation
import React from "react";
import MonsterCard from "./components/MonsterCard.jsx";
import {monsters} from "./Util/database.js";

//Build component

function App() {

    const displayMonsterCards = monsters.map((monster,index) => (
        <MonsterCard {...monster}key={index} />
    ))

    return (
        <div>
            <h1>Monster Database</h1>
            {displayMonsterCards}
        </div>
    );
}

//Slightly newer way to do things but not as good as the one above
// function App() {
//     return (
//         <div>
//             <h1>Monster Database</h1>
//             {monsters.map((monster) => (
//                 <MonsterCard {...monster} />
//             ))}
//         </div>
//     );
// }


//Older way of thinking still valid.
// const  App = () =>{
//     return(
//         <>
//             <h1> Monster Database</h1>
//             <MonsterCard
//                 firstName="Zorg"
//                 lastName="the Destroyer!!"
//                 age={500}
//                 type="undead"
//                 moreInfo="Terrifies galaxies"
//             />
//         </>
//     )
// }

//Export so it can be used in other files
export  default App;