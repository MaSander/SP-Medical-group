import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';

export class ListaLocalizacao extends Component {
    constructor(event) {
        super(event);

        this.state = {
            listaPontos: []
        }
    }

    componentDidMount() {
        this.buscarLocalizacoes();
    }

    buscarLocalizacoes() {
        axios.get("http://192.168.3.110:5000/api/localizacoes")
            .then(res => {
                const resPontos = res.data;
                this.setState({ listaPontos: resPontos }, () => {
                    console.log(this.state.listaPontos)
                })
            })

    }

    render() {

        const styelMap = {
            width: '800px',
            height: '40vh'
        }

        return (
            <div>
                <script src="http://maps.google.com/maps/api/js?sensor=false" type="text/javascript"></script>
                <h2>Lista de localização</h2>
                <div><a href="/">inicio</a></div>

                <Map google={this.props.google} zoom={11}
                    style={styelMap}
                    initialCenter={{
                        lat: -23.5489,
                        lng: -46.6388
                    }}>

                    {
                        this.state.listaPontos.map((points) => {
                                return (
                                    <Marker
                                        onClick={this.onMarkerClick}
                                        name={'ACurrent location'}
                                        position={{ lat: points.latitude, lng: points.longitude }}
                                    />

                                )
                            }
                        )
                    }
                </Map>
            </div>
        )
    }

    
}

export default GoogleApiWrapper({
    apiKey: ("")
})(ListaLocalizacao)