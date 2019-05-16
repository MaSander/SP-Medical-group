import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import api from '../services/api';
import auth from '../services/auth';

class Consultas extends Component {
    constructor(props){
        super(props);

        this.state = {
            lista: []
            ,token: ''
        }
    }

    componentDidMount(){
        this.buscarToken();
    }

    buscarToken = async () =>{
        try{
            const value = await auth.getItem('spmedg-token');
            if(value !== null){
                this.setState({ token: value });
                Alert.alert("ta rodando ate aqui");
                Alert.alert( value );
                this.carregarConsulta();
            }
        }
        catch{
            // Alert.alert('aqui e que vai da merda')
            // Alert.alert(this.state.token)
            (error)
        }
    }

    carregarConsulta = async () =>{
        const resposta = await api.get('/Consultas', 
        {headers: {
                'Authorization': "bearer " + this.state.token
            }
        })
        const dadosDaApi = resposta.data
        this.setState({ lista : dadosDaApi })
    }

    render() {
        return (
            <View>
                <Text>Pagina de consultas</Text>
                <FlatList
                    data = {this.state.lista}
                    keyExtractor = {item => item.idConsulta}
                    renderItem = {this.renderizaItem}
                />
            </View>
        )
    }

    renderizaItem = ({item}) =>(
        <View>
        <Text>{item.dataConsulta}</Text>
        <Text>{item.statusConsulta}</Text>
        <Text>{item.nomePaciente}</Text>
        <Text>{item.especialidade}</Text>
        </View>
    );
}

export default Consultas