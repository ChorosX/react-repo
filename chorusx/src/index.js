import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Globe from 'react-globe.gl';

// import THREE from './three'

setInterval(async function getSatalites() {
  const response = await fetch('http://localhost:5000/satellites/25544');
  console.log("updating")
  let data = await response.json()
  //let satName = data[0]
  let lat = data['latitude'][data['latitude'].length - 1]
  let lng = data['longitude'][data['longitude'].length - 1]
  let satName = data['satName']

  let lat0 = data['latitude'][data['latitude'].length - 20]
  let lng0 = data['longitude'][data['longitude'].length - 20]

  const N = 1
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: lat0,
    startLng: lng0,
    endLat: lat,
    endLng: lng,
    color: 'white',
    arcAltitude: '0',
    arcStroke: '0.5',
  }));

  const arcsData2 = [...Array(N).keys()].map(() => ({
    endLat: lat,
    endLng: lng,
    pointAltitude: '0.005',
    pointRadius: '1',
    pointColor: 'white',
    altitude: 3.5
  }));



  ReactDOM.render(
    <React.StrictMode>
      <App />,
    </React.StrictMode>,
    document.getElementById('navbar')
  );

  ReactDOM.render(
    <React.StrictMode>
      <Globe s
        backgroundImageUrl="https://cdn.eso.org/images/large/eso0932a.jpg"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        arcsData={arcsData}
        pointsData={arcsData2}
        pointLat={'endLat'}
        pointLng={'endLng'}
        pointAltitude={'pointAltitude'}
        pointRadius={'pointRadius'}
        pointColor={'pointColor'}
        pointLabel={d => `<div><b>` + satName + `<br><br>Latitude:  ` + lat + `<br>Longitude:  ` + lng + `</b><br></div>`}
        onPointClick={d => { window.open(d.url, '_blank'); console.log("CLICKED") }}
        onPointHover={d => { console.log("zaid is gamer") }}
        arcColor={'color'}
        arcAltitude={'arcAltitude'}
        arcStroke={'arcStroke'}
        arcColor={[`rgba(255, 255, 255, 0)`, `rgba(255, 255, 255, 0.7)`]}
        arcLabel={d => `<div><b>ISS</b></div>`}
      />,

    </React.StrictMode>,
    document.getElementById('root')
  );
}, 600000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
