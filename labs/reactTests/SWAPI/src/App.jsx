// Import
import React, { useState } from "react";
import axios from "axios";
import Table from "./components/Table";
import "./App.css";
import bgImage from "./assets/swapiBackground.jpg";

// Function
const App = () => {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setLoading(true);

        const randomPage = Math.floor(Math.random() * 9) + 1;

        axios
            .get(`https://swapi.dev/api/people?page=${randomPage}`)
            .then((response) => {
                setPeople(response.data.results);
                console.log("Data fetched:", response.data.results);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            })
            .finally(() => {
                setLoading(false); // Stop loading
            });
    };

    const handleReset = () => {
        setPeople([]);
        console.log("Data reset!");
    };

    return (
        <div
            className="App"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <h1>Star Wars Characters</h1>

            <button onClick={handleSubmit}>Fetch Characters</button>
            <button onClick={handleReset} style={{ marginLeft: "10px" }}>
                Reset
            </button>

            {loading && <p>Loading characters...</p>}

            {!loading && people.length > 0 && <Table people={people} />}
        </div>
    );
};

// Export
export default App;
