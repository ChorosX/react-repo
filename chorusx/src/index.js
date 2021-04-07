import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Globe from 'react-globe.gl';

// import THREE from './three'
ReactDOM.render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>,
  document.getElementById('navbar')
);
let daymode = document.getElementById('day-mode')
if(daymode == null )
{
  console.log("the daymode is null")
}
else
{
  console.log("the daymode is not null")
  daymode.addEventListener('click', myFunction)
}

function myFunction()
{
  var popup = document.getElement 
}

var list = ['20580',
  '25544',
  '25994',
  '26871',
  '27386',
  '28790',
  '29155',
  '31135',
  '33591',
  '37849',
  '39444',
  '40967',
  '41759',
  '42738',
  '42740',
  ]

setInterval(async function getSatalites() {

  const response = await fetch('http://localhost:5000/satellites');
  console.log("updating")
  
  let data = await response.json()
  console.log(data)
   
  const N = data.length - 1
  
  //let satName = data['satName']
  const arcsData = [...Array(13).keys()].map((i) => ({
    startLat: data[list[i]]['latitude'][data[list[i]]['latitude'].length - 30],
    startLng: data[list[i]]['longitude'][data[list[i]]['longitude'].length - 30],
    endLat: data[list[i]]['latitude'][data[list[i]]['latitude'].length - 1],
    endLng: data[list[i]]['longitude'][data[list[i]]['longitude'].length - 1],
    color: 'white',
    arcAltitude: '0',
    arcStroke: '0.8',
  }));

  const labelsData = [...Array(13).keys()].map((i) => ({
    lat: data[list[i]]['latitude'][data[list[i]]['latitude'].length - 1],
    lng: data[list[i]]['longitude'][data[list[i]]['longitude'].length - 1],
    labelSize: 1.0,
    labelDotRadius: 1.5,
    labelLabel: "<div style='padding:20px;width:700px; position: absolute; margin-top: -400px; margin-left: -500px; background-color:rgba(0,0,0,0.5); border-radius:25px;'><img  style='min-width:300px; width: 300px; text-align:center;' src=" + data[list[i]]['pictureUrl'] + "/>" + "<h1 style = 'color:white; text-align:center;'>" + data[list[i]]['satName'] + "</h1>" + "<b>" + "<p style='margin: 10px 0; padding 5px'>" + data[list[i]]['description'] + "</p><p>Launch Date: " + data[list[i]]['launchDate'] + "</p>" + "<b>" + "<br>Latitude: " +  data[list[i]]['latitude'][data[list[i]]['latitude'].length - 1] + "<br>Longitude: " + data[list[i]]['longitude'][data[list[i]]['longitude'].length - 1] + "</div>",
    labelText: data[list[i]]['satName'],
  }));

  //dayMode = "//unpkg.com/three-globe/example/img/earth-day.jpg"
  //nightMode = "//unpkg.com/three-globe/example/img/earth-night.jpg"
  //marbleMode = "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"

  
  ReactDOM.render(
    <React.StrictMode>
    <Globe
      pointOfView = {[`-42.59567864`,`-57.69437839`,`2`]}
      backgroundImageUrl = "https://cdn.eso.org/images/large/eso0932a.jpg"
      globeImageUrl = "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl = "//unpkg.com/three-globe/example/img/earth-topology.png"
      arcsData = {arcsData}
      labelsData = {labelsData}
      labelLat = {'lat'}
      labelLng = {'lng'}
      labelSize = {'labelSize'}
      labelDotRadius = {'labelDotRadius'}
      labelLabel = {'labelLabel'}
      labelText = {'labelText'}
      labelColor = {() => 'white'}
      labelAltitude = {()=> 0.005}
      arcColor = {'color'}
      arcAltitude = {'arcAltitude'}
      arcStroke = {'arcStroke'}
      arcColor = {[`rgba(255, 255, 255, 0)`, `rgba(255, 255, 255, 0.7)`]}
    />,
    
    </React.StrictMode>,
    document.getElementById('root')
  );
}, 60000)






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
