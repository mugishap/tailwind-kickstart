
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react'
import './City.css'
let data1
function City() {
  const [cities, setCities] = useState([])

  useEffect(() => {
    getCities()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
const mydata = JSON.parse(localStorage.getItem('cities'))
      
  const getCities = async () => {
    const check = localStorage.getItem("cities")
    if (check !== null) {
      setCities(["ha", "hi", "jkj"]);
      console.log(cities, JSON.parse(check));
    }
    else {
      const data = await fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10', {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
          'X-RapidAPI-Key': 'a7b8eec781msh805288343af46e0p101612jsn652eddc8198f'
        }

      })
        .then(res => res.json())
        .then(data => {
          setCities(data)
          // localStorage.setItem('cities', JSON.stringify(data))
          const res = data
          console.log(data)
          console.log(res);
          return data
        })

      console.log(cities);
      // localStorage.setItem("cities", JSON.stringify(data.json()))
    }
  }
  return (
    <div>
      <div className="search">
        <form>
        <label htmlFor="search">Search</label>
        <input type="text" className='search' id='search' />
        </form>

      </div>
            {
        mydata.data.map((city) => {
          return (
            <div className="card">
              <div className="image">
                <img src='https://images.unsplash.com/photo-1650390096692-ed9cb95fac40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt="" />
              </div>
              <div className='form-div-city'>
                <form id='city-readonly'>
                  <div className="labels">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" readOnly={true} value={city.name} />
                  </div>
                  <div className="labels">
                    <label htmlFor="name">Location:</label>
                    <input type="text" name="name" id="name" readOnly={true} value={city.country} />
                  </div>
                  <div className="labels">
                    <label htmlFor="name">Latitude:</label>
                    <input type="text" name="name" id="name" readOnly={true} value={city.latitude} />
                  </div>
                  <div className="labels">
                    <label htmlFor="name">Longitude:</label>
                    <input type="text" name="name" id="name" readOnly={true} value={city.longitude} />
                  </div>
                  <div className="labels">
                    <label htmlFor="name">Region:</label>
                    <input type="text" name="name" id="name" readOnly={true} value={city.region} />
                  </div>
                  <div className="labels">
                    <label htmlFor="name">Country code:</label>
                    <input type="text" name="name" id="name" readOnly={true} value={city.countryCode} />
                  </div>
                </form>
              </div>
            </div>
          )
        }
        )
      }
    </div>

  )
}
export default City
