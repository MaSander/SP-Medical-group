import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class ListaLocalizacao extends Component {
    constructor(event) {
        super(event);

        this.state = {
            listaPontos: []
        }
    }

    render() {

        const styelMap = {
            width: '800px',
            height: '89vw'
        }

        return (
            <div>
                <script src="http://maps.google.com/maps/api/js?sensor=false" type="text/javascript"></script>
                <h2>Lista de localização</h2>
                <div><a href="/">inicio</a></div>

                <Map google={this.props.google} zoom={11}
                    styles={styelMap}
                    initialCenter={{
                        lat: -23.5489,
                        lng: -46.6388 
                    }}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'}
                        position={{ lat: 37.759703, lng: -122.428093 }}
                    />

                    <Marker onClick={this.onMarkerClick}
                        name={'ACurrent location'}
                        position={{ lat: 37.762391, lng: -122.439192 }}
                    />

                </Map>


                {/* <iframe src="file:///C:/Users/51755101856/Desktop/SP-Medical-group/Web/sp-medical-group/src/pages/Servico/mapaa.html" width="680" height="480" allowfullscreen></iframe> */}

            </div>
        )
    }

    // geralPontos() {
    //         return(
    //             <div>

    //             {(listaPontos.Map(point) => (
    //                 <Marker onClick={this.onMarkerClick}
    //                 name={'ACurrent location'}
    //                 position={{ listaPontos.latitude, listaPontos.longitude }}
    //                 />
    //                 ))}
    //             </div>
    //         )
    // }
}

export default GoogleApiWrapper({
    apiKey: ("")
})(ListaLocalizacao)