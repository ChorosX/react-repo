import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './src/App';


  const N = 300;
  setInterval(async function getSatalites() {
    const response = await fetch('http://localhost:5000/satdata/25544');
    console.log("updating")
    let data = await response.json()
    console.log(data)

    let jsonData = data.positions[0]
    let lat = jsonData.satlatitude
    let long = jsonData.satlongitude


    const gData = [...Array(N).keys()].map(() => ({
      lat: lat,
      lng: long,
      size: 0.1,
      color: 'red'
    }));



    ReactDOM.render(
      <Globe
      backgroundImageUrl="https://cdn.eso.org/images/large/eso0932a.jpg"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        
        pointsData={gData}
        pointAltitude="size"
        pointColor="color"

        customLayerData={data}
        customThreeObject={d => new THREE.Mesh(
          new THREE.SphereBufferGeometry(d.radius),
          new THREE.MeshLambertMaterial({ color: d.color })
        )}

        customThreeObjectUpdate={(obj, d) => {
          Object.assign(obj.position, globeEl.current.getCoords(d.lat, d.lgn, 3))
        }}
      />,
      document.getElementById('globeViz')
    );

  }, 3000)