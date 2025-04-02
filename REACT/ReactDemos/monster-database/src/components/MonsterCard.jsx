// Foundation
import React from "react";

//Build component
const MonsterCard = ({firstName, lastName, age, type, moreInfo}) => {
    //Space to do your logic

    return (
        // React Fragment: A wrapper element that doesn't add extra DOM nodes
        <>
            {/* Main container for the monster card */}
            <div className="monster-card">
                {/* Heading inside the monster card */}
                <h1>{firstName} {lastName} </h1>
                    <p>Age: {age}</p>
                    <p>Type: {type}</p>
                    <p>More Info: {moreInfo}</p>
            </div>
        </>
    );
};


// Export so it can be used in other files
export default MonsterCard