import fetch from "node-fetch";
const cities = async () => {
    await fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
            'X-RapidAPI-Key': '4d3efa6d60mshe9647b4fc7ea6dbp1bf6dajsn7de302358e22'
        }
    })
        .then(res => res.json())
        .then(data => console.log(data.data))
}

console.log(cities());