import fetch from "./node_modules/node-fetch";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
        'X-RapidAPI-Key': '4d3efa6d60mshe9647b4fc7ea6dbp1bf6dajsn7de302358e22',
        'Content-Type': 'application/json'
    }
};

const getData = async e => {

    const data = await fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    return data
}

getData()