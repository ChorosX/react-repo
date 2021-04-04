import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Globe from 'react-globe.gl';

setInterval(async function getSatalites() {
  const response = await fetch('http://localhost:5000/satdata/25544');
  console.log("updating")
  let data = await response.json()
  //let satName = data[0]
  let lat = data[1]
  let lng = data[2]
  let lat0 = -25.87960202 
  let lng0 = 21.53658652

  const N = 1
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: '-41.61826842',
    startLng: '-72.02946585',
    endLat: lat,
    endLng: lng,
    color: 'white',
    arcAltitude: '0',
    arcStroke: '0.3',
  }));

  const arcsData2 = [...Array(N).keys()].map(() => ({
    endLat: lat,
    endLng: lng,
    pointAltitude: '0',
    pointRadius:'0.6',
    pointColor:'white',
  }));
  
  var moonGeometry = new THREE.SphereGeometry(1, 50, 50);
  var moonMaterial = new THREE.MeshPhongMaterial({
      color: 0x00
      // map: THREE.ImageUtils.loadTexture("/images/moon_texture.jpg")
  });

  var x = eRad * Math.cos(-2.01388159) * Math.cos(-87.57459407);
  var y = eRad * Math.cos(-2.01388159) * Math.sin(-87.57459407);
  var z = eRad * Math.sin(-2.01388159);

  var moon = new THREE.Mesh(moonGeometry, moonMaterial);
  moon.position.set(x, y, z);
  
  ReactDOM.render(
    <React.StrictMode>
    <App />,
    <Globe
    
      backgroundImageUrl = "https://cdn.eso.org/images/large/eso0932a.jpg"
      globeImageUrl = "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl = "//unpkg.com/three-globe/example/img/earth-topology.png"
      arcsData = {arcsData}
      pointsData = {arcsData2}
      pointLat = {'endLat'}
      pointLng = {'endLng'}
      pointAltitude = {'pointAltitude'}
      pointRadius = {'pointRadius'}
      pointColor = {'pointColor'}
      pointLabel = {d => `<div><b>ISS</b><br>$P</div>`}
      onPointClick={d => {window.open(d.url, '_blank');console.log("CLICKED")}}
      onPointHover={d => {console.log("zaid is gamer")}}
      arcColor = {'color'}
      arcAltitude = {'arcAltitude'}
      arcStroke = {'arcStroke'}
      arcColor = {[`rgba(255, 255, 255, 0)`, `rgba(255, 255, 255, 0.7)`]}
      arcLabel = {d => `<div><b>ISS</b></div>`}
      
    />,
    
    </React.StrictMode>,
    document.getElementById('root')
  );
}, 10000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
