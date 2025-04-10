import React from 'react';
import { useState } from 'react'

const App = () => {
    const initialState = {
        fname: "",
        age: 0
    }
    // Enter individual pieces of data below. This is less dynamic
    // const [firstName, setFirstName] = useState("")
    // const [myAge, setMyAge] = useState()

    // More dynamic way of data management
    const [formData, setFormData] = useState(initialState)

    //destructure to make it more dynamic in you values
    const {fname, age} = formData

    function handleSubmit(evt) {
        evt.preventDefault()
        console.log(formData)
    }

    function handleChange(event) {
        console.log(event)
        setFormData(
            {...formData,[event.target.name]: event.target.value}
        )
        // spread operator
        console.log(formData)
        // send to database
        // axios call
    }

    return (

        <>
            <form onSubmit={handleSubmit}>

                <label> First Name:
                    <input type="text"
                           name="fname"
                           value={fname}
                           onChange={handleChange}/>
                </label>

                <br/>

                <label> Age:
                    <input
                        type="number"
                        name="age"
                        value={age}
                        onChange={handleChange}/>
                </label>

                <br/>
                <button type="submit">Submit</button>
                <br/>

            </form>
        </>
    );
};

export default App;