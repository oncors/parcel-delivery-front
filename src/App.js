import React, {Component} from "react";
import './App.css';
import DeliveryMap from "./model/map"

class App extends Component {
    state = {
        parcels: []
    }

    render() {
        return (
            <div>
                <DeliveryMap parcels={this.state.parcels}/>
            </div>
        )
    }
}

export default App;
