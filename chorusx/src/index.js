import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Globe from 'react-globe.gl';

const N = 2;
setInterval(async function getSatalites() {
  const response = await fetch('http://localhost:5000/satdata/25544');
  console.log("updating")
  let data = await response.json()

  
  //let satName = data[0]
  let lat = data[1]
  let long = data[2]
  let lat0 = -25.87960202 
  let lng0 = 21.53658652


  const gData = [{
    lat: '-25.87960202',
    lng: '-21.53658652',
    size: 0.1,
    color: 'red'
  },
  {
  lat: '-27.87960202',
  lng: '-28.53658652',
  size: 0.1,
  color: 'red'
}];
  console.log(gData)

  ReactDOM.render(
    <React.StrictMode>
    <App />,
    
    <Globe
      backgroundImageUrl="https://cdn.eso.org/images/large/eso0932a.jpg"
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      
      pointsData={gData}
      pointAltitude="size"
      pointColor="color"

      /*customLayerData={data}
      customThreeObject={d => new THREE.Mesh(
        new THREE.SphereBufferGeometry(d.radius),
        new THREE.MeshLambertMaterial({ color: d.color })
      )}

      customThreeObjectUpdate={(obj, d) => {
        Object.assign(obj.position, globeEl.current.getCoords(d.lat, d.lgn, 3))
      }*/

    />,
    </React.StrictMode>,
    document.getElementById('root')
  );

}, 15000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
