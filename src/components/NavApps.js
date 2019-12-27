import {NavigationApps,actions,googleMapsTravelModes,mapsTravelModes} from "react-native-navigation-apps";
import React, { Component } from "react";
 
export default class NavApps extends Component {
    constructor(props) {
        super(props)
        this.lon = this.props.coordinates[0]
        this.lat = this.props.coordinates[1]
    }
    render() {
        return(
            <NavigationApps
            iconSize={50}
            row
            waze={{lat: this.lat, lon: this.lon, action: actions.navigateByLatAndLon}} 
            googleMaps={{address: 'hatavor 6',lat: this.lat, lon: this.lon, action: actions.navigateByLatAndLon}} 
            maps={{address: 'hatavor 6',lat: this.lat, lon: this.lon, action: actions.navigateByAddress,travelMode:mapsTravelModes.driving}} 
        />
        )
    }

}

     