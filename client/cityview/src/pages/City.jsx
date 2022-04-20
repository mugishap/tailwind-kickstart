/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react'
function City() {
  const [cities, setCities] = useState([])

  useEffect(() => {
    getCities()
  }, [])

  const getCities = async () => {
    const check = localStorage.getItem("cities")
    // if (check != null) {
    //   setCities(JSON.parse(check))
    // }
    // else {
    const data = await fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
        'X-RapidAPI-Key': 'a7b8eec781msh805288343af46e0p101612jsn652eddc8198f'
      }
    }).then(res => res.json())
    .then(data => { 
      setCities(data)
      localStorage.setItem('cities',JSON.stringify(data))
      const res = data
      console.log(data)
      console.log(res);
      return data })
    console.log(cities);
    // localStorage.setItem("cities", JSON.stringify(data.json()))
    // }

  }

  return (
    <div>

    </div>
  )
}

export default City