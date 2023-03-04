import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
    render() {
        const mapStyles = {
            width: '50%',
            height: '100%'
        };

        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: 55.701965804423956,
                    lng: 37.79574843245193
                }}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA_pa6xix4D-har8jKcVuIKV5Au3ePwGtA'
})(MapContainer);
