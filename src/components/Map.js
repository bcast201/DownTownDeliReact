import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

class Location extends Component {
    render() {
        return (
            <React.Fragment>
                    <div>
                    <Map
                        google={this.props.google}
                        zoom={15}
                        style={mapStyles}
                        initialCenter={{ lat: 40.813593, lng: -96.707102}}   
                        z-index='0'                
                    >
                    <Marker position={{ lat: 40.813480, lng:-96.707209}} />
                    </Map>
                    <div className="contatiner mapsContainer" id="mapscroll">
                        <h2 className="text-left">We are located at 10th & O Inside Lincoln's Historic Terminal Building</h2>
                    </div>
                    </div>
               
                
            </React.Fragment>
        )
    }
}


const mapStyles = {
    width: '100%',
    height: '100%',
    position: 'relative'
};

export default GoogleApiWrapper({ apiKey: 'AIzaSyBn6r_bbuudShoyfiQ8wMWWGvmS7ImNEQw'})(Location);