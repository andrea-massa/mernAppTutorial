import React from "react";

function Map(props){
    return(
        <div className="map">
            <p>Latitude: {props.coordinates.lat}</p>
            <p>Longitude: {props.coordinates.lng}</p>
        </div>
    )

}


export default Map;