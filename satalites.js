let lat = null
let long = null
const fetch = require("node-fetch");
async function getSatalites() {
    const response = await fetch('https://api.n2yo.com/rest/v1/satellite/positions/25544/41.702/-76.014/0/2/&apiKey=ZVZQAW-QN6CAQ-FUR8SR-4O4V');
    let data = await response.json()
    return data
}


getSatalites().then(data => {
    console.log(data)
    lat = data.postions.satlatitude
    long = data.postions.satlongitude
    console.log(lat);
    console.log(long);
})