// Import
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from "../component/Home.jsx";
import Contact from "../component/Contact.jsx";
import About from "../component/About.jsx";
import axios from "axios";
import MovieCard from "../component/MovieCard.jsx";
import {useState} from "react";


// Function
// messing with state
const App = () => {
    const [movies, setMovies] = useState("")
    const handleClick = () => {
        // endpoint
        // xml or json
        // much data
        // what does data look like
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/now_playing',
            params: {language: 'en-US', page: '1'},
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.VITE_TMDB_API_TOKEN}`
            }
        };        // Our actual endpoint (example)(find it by going to TMDB and try it out, press Try It! and look in the Curl Request.
        //'https://api.themoviedb.org/3/search/movie?query=frozen&include_adult=false&language=en-US&page=1'
        //NOT
        //https://api.themoviedb.org/3/search/movie
        axios(options)
            .then(response => {
                console.log(response.data.results)
                let movieArray = response.data.results.map(movie => {
                    return <MovieCard data ={movie}/>
                })
                setMovies(movieArray)
            })
            .catch(error => {
                console.error(error.message)
            })

    };
    return (
        <>
            <h1>App Comp</h1>
            <Router>
                <div className="App">
                <ul>
                    <li>
                    {/*Normally would use anchor tag but with React use link component*/}
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                </ul>
            <hr/>
                <Routes>
                    <Route path={"/home"}
                           element={<Home/>}></Route>
                    <Route path={"/contact"}
                           element={<Contact/>}></Route>
                    <Route path={"/about"}
                           element={<About/>}></Route>
                </Routes>
            </div>
            </Router>
            <button onClick={handleClick}>Now Playing</button>
            {movies}
        </>
    )
}


// Export
export default App;