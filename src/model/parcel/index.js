import React, {useState} from "react";
import parcel_png from "./parcel.png";
import Card from 'react-bootstrap/Card'
import {Badge} from "react-bootstrap";

function Parcel(props) {
    const [style, setStyle] = useState("scale(0.35)")
    const [detailsCardStyle, setDetailsCardStyle] = useState("none")

    console.log("PACG: " + props.packageId)

    return (
        <div>
            <div className="package"
                 style={{
                     left: props.x - 40,
                     top: props.y - 80,
                     backgroundImage: `url('${parcel_png}')`,
                     position: "absolute",
                     transform: style,
                     zIndex: "2",
                     width: '102px',
                     height: '100px',
                 }}
                 onMouseEnter={event => {
                     setStyle("scale(0.5)");
                 }}
                 onMouseLeave={event => {
                     setStyle("scale(0.35)")
                 }}
                 onClick={event => {
                     setDetailsCardStyle("block")
                 }}
            />

            <Card border="secondary"
                  style={{
                      display: detailsCardStyle,
                      position: "absolute",
                      left: props.x + 15,
                      top: props.y - 105,
                      width: '7rem',
                      zIndex: "1",
                      transform: "scale(1)",
                      fontSize: "13px",

                      borderRadius: "5px",
                      borderStyle: "solid",
                      borderWidth: "3px",
                      borderColor: "aliceblue"
                  }}
                  onClick={() => {
                      setDetailsCardStyle("none")
                  }}>

                <Card.Header style={{
                    backgroundColor: "#343841",
                    color: "aliceblue",
                    height: "2.5rem",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>package {props.parcelId}</Card.Header>
                <Card.Body style={{
                    backgroundColor: props.color,
                    color: "aliceblue",
                    height: "2rem",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Card.Text>
                        <Badge pill variant="warning">{props.status}</Badge>{' '}
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Parcel;
