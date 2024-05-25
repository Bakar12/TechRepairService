import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{height: '400px', width: '100%'}}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty popup. <br/> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
