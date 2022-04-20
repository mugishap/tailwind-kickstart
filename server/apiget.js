import fetch from "node-fetch";
const options = {
    method: 'POST',
    url: 'https://joke3.p.rapidapi.com/v1/joke',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Host': 'joke3.p.rapidapi.com',
        'X-RapidAPI-Key': '4d3efa6d60mshe9647b4fc7ea6dbp1bf6dajsn7de302358e22'
    }
};
const getData = async e => {
    return await fetch('https://joke3.p.rapidapi.com/v1/joke', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
console.log(getData())