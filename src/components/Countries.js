import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import TodosList from "./TodosList";

const Country = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            console.log(res.data)
            setCountries(res.data)
        }).catch(err => console.log(err))
    },[])
    return(
        <>
        <div>{countries.title}</div>
        <div>{countries.id}</div>
        <TodosList 
        data={countries}
        />
        </>
    )
}

export default Country;