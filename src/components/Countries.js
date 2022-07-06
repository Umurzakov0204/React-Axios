import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'

const Country = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res.data)
            setCountries(res.data)
        }).catch(err => console.log(err))
    },[])
    return(
        <>
        <div>{countries.users}</div>
        </>
    )
}

export default Country;