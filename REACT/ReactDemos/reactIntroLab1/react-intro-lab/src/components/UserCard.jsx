// foundation
import React from "react";


// function
function UserCard(props){
    return (
        <div style={{ border: "3px solid", padding: "10px", marginBottom: "10px"}}>
            <h2>{props.name}</h2>
            <p>Age:{props.age}</p>
        </div>
    );
}

// export
export default UserCard;