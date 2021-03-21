import React from "react";
import "./city.css"

function City(props) {

    return (
        <div className="map">
            <div className="field"
                 style={{
                     left: props.x,
                     top: props.y,
                 }}>
                <p className="cityName">{props.name}</p>
            </div>
        </div>
    )
}

export default City;
