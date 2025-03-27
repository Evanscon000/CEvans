// foundation
import React from "react";
import Greeting from "./components/Greeting.jsx";
import UserCard from "./components/UserCard.jsx";
import CardContainer from "./components/CardContainer.jsx";

// function
function App() {
    // creating the array of users
    const users = [
        { name: "Bob", age: 25 },
        { name: "Charlie", age: 35 },
        { name: "Alice", age: 30 }
    ];

    // Sorting the array from oldest to youngest
    function sortByAgeDescending(array) {
        return array.sort((a, b) => b.age - a.age); // oldest first
    }

    const sortedUsers = sortByAgeDescending(users);

    return (
        <div>
            <CardContainer>
                {
                    // Loop through sorted users and return UserCard
                    sortedUsers.map((user, index) => (
                        <UserCard key={index} name={user.name} age={user.age} />
                    ))
                }
            </CardContainer>
        </div>
    );
}

//export
export default App;