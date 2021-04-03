let lat = null
let long = null

let x, y, z = null
const R = 1

const fetch = require("node-fetch");
async function getSatalites() {
    const response = await fetch('http://localhost:5000/satdata/25541');
    let data = await response.json()
    console.log(data)
    return data
}


getSatalites().then(data => {
    lat = data.positions[0].satlatitude
    long = data.positions[0].satlongitude
    console.log(lat);
    console.log(long);
})
