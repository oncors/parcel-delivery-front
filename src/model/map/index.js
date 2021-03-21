import React, {useState} from "react";
import country from "./country.png"
import City from "../city";
import Parcel from "../parcel";
import {status} from "../../const/enum"
import {configuration} from "../../config/config";


function DeliveryMap(props) {
    const citiesMap = new Map([]);
    // const [parcels, setParcels] = useState([])

    const parcels = [
        {
            city: "Szczecin",
            parcels: [
                {
                    parcelId: "9042443e-fd68-476f-94d8-7d54ca14c8f3",
                    status: "TO_DELIVERY",
                    deliveryAddress: "Poznań"
                }
            ]
        }
    ]

    const statuses = new Map([
        [status.DELIVERY_DATE_EXPIRES, {color: "#e5a118", label: "date expires"}],
        [status.DELIVERY_DATE_EXPIRED, {color: "#771d25", label: "date expired"}],
        [status.TO_DELIVERY, {color: "#2c691b", label: "to delivery"}]
    ]);


    const cities = [
        {x: 480, y: 515, name: "Kalisz"},
        {x: 380, y: 620, name: "Wrocław"},
        {x: 379, y: 68, name: "Słupsk"},
        {x: 774, y: 440, name: "Warszawa"},
        {x: 722, y: 185, name: "Olsztyn"},
        {x: 668, y: 785, name: "Kraków"},
        {x: 577, y: 752, name: "Katowice"},
        {x: 134, y: 242, name: "Szczecin"},
        {x: 928, y: 599, name: "Lublin"},
        {x: 368, y: 412, name: "Poznań"},
        {x: 476, y: 294, name: "Bydgoszcz"},
        {x: 620, y: 516, name: "Łódź"},
        {x: 988, y: 293, name: "Białystok"},
        {x: 872, y: 787, name: "Rzeszów"},
        {x: 737, y: 658, name: "Kielce"},
        {x: 201, y: 359, name: "Gorzów Wielkopolski"},
        {x: 539, y: 91, name: "Gdańsk"},
        {x: 227, y: 488, name: "Zielona Góra"},
    ]

    // function getParcels() {
    //     console.log("get parcels")
    //
    //     fetch(configuration.API_GW_ADDRESS + "/parcel")
    //         .then(res => res.json())
    //         .then(json => {
    //             console.log(json)
    //             setParcels(json)
    //         });
    //
    // }
    // setInterval(getParcels, configuration.INTERVAL)

    /* FIXME: index.js:45 GET http://localhost:8084/parcel net::ERR_INSUFFICIENT_RESOURCES
    *   za dużo requestów od zasobu/ albo parcele nie powinny być przeładowywane za każdym razem przez
    *   Reac.createElement - póki co zahardcodowany json
    * */

    return (
        <div
            style={{
                position: "relative",
                width: "65vw",
                height: "65vw",
                backgroundImage: `url('${country}')`,
                backgroundRepeat: 'no-repeat',
                margin: "0px auto",
            }}>

            {cities.forEach(
                city =>
                    citiesMap.set(city.name, {x: city.x, y: city.y, name: city.name})
            )}

            {parcels.map(
                (packGroup) => {
                    let city = citiesMap.get(packGroup.city);
                    return packGroup.parcels.map(
                        (parcel, index) => {
                            let parcelStatus = statuses.get(parcel.status)
                            return React.createElement(Parcel,
                                {
                                    x: city.x + index % 3 * 16,
                                    y: city.y + index * 5 - ((index > 2) ? 38 : 0),
                                    parcelId: parcel.parcelId,
                                    color: parcelStatus.color,
                                    status: parcelStatus.label
                                })
                        })
                })}

            {cities.map(
                city => React.createElement(City, city)
            )}
        </div>
    )
}

export default DeliveryMap;
