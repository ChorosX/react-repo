import React from 'react';
const satellite = ({ satellite }) => {
    return (
        <div>
            <center><h1>Contact List</h1></center>
            {satellite.map((satellite) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{satellite.results[0].geometry.location.lat}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{satellite.results[0].geometry.location.lat}</h6>
                        <p class="card-text">{satellite.results[0].geometry.location.ln}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default satellite;