import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
function Searched() {
    const [searchedCity, setSearchedCity] = useState([])
    const inputted = useParams()
    const getSearched = async () => {
        const info = await fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q24656',
            {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
                    'X-RapidAPI-Key': '4d3efa6d60mshe9647b4fc7ea6dbp1bf6dajsn7de302358e22'
                }
            }).then((data) => data.json()).then(data => { return data })
        console.log(info)
        setSearchedCity(info)
    }
    useEffect(() => {
        getSearched(inputted.search)
    }, [inputted.city])
    return (
        <div></div>
    )
}

export default Searched