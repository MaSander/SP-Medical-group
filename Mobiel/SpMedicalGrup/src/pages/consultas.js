import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import jwt from "jwt-decode";

import api from '../services/api';
import auth from '../services/auth';

class Consultas extends Component {
    constructor(props){
        super(props);

        this.state = {
            lista: []
            ,token: ''
            ,usuario: ''
        }
    }

    componentDidMount(){
        this.buscarToken();
    }

    buscarToken = async () =>{
        try{
            const value = await auth.getItem('spmedg-token');
            if(value !== null){
                // Alert.alert(value)
                this.setState({ token: value });
                this.setState({ usuario: jwt(value).tipoUsuario });
                // Alert.alert(this.state.usuario)
                this.carregarConsulta();
            }
        }
        catch{
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
        // Alert.alert(tipousuario)
        this.setState({ lista : dadosDaApi })
    }

    render() {
        return (
            <View>
                <Text style={styles.headers}>Consultas</Text>
                <FlatList
                    data = {this.state.lista}
                    keyExtractor = {item => item.idConsulta}
                    renderItem = {this.renderizaItem}
                />
            </View>
        )
    }

    renderizaItem = ({item}) =>(
        this.state.usuario === 'Paciente' ?
        <View style={styles.consultas}>
            <Text>Data: {item.dataConsulta}</Text>
            <Text>Status: {item.statusConsulta}</Text>
            <Text>Médico: {item.nomeMedico}</Text>
            <Text>especialidade: {item.especialidade}</Text>
            <Text>Obs: {item.descricao}</Text>
        </View> 
        :
        ( this.state.usuario === 'Médico' ?  
        <View style={styles.consultas}>
            <Text>Data: {item.dataConsulta}</Text>
            <Text>Status: {item.statusConsulta}</Text>
            <Text>Paciente: {item.nomePaciente}</Text>
            <Text>Nascimento: {item.dtNascimentoPaciente}</Text>
            <Text>Obs: {item.descricao}</Text>
        </View>
            :
            (this.state.usuario === 'Administrador' ? 
                <View style={styles.consultas}>
                    <Text>Data: {item.dataConsulta}</Text>
                    <Text>Status: {item.statusConsulta}</Text>
                    <Text>Paciente: {item.nomePaciente}</Text>
                    <Text>Nascimento: {item.dtNascimentoPaciente}</Text>
                    <Text>Médico: {item.nomeMedico}</Text>
                    <Text>especialidade: {item.especialidade}</Text>
                    <Text>Obs: {item.descricao}</Text>
                </View>
            : 
            <Text>Erro</Text>
            )
        )
    );
}

const styles = StyleSheet.create({
    headers: {
        color: 'black'
        ,width: '100%'
        ,display: 'flex'
        ,padding: 8
        ,backgroundColor: '#81df99'
    }
    ,consultas: {
        padding: 10,
        backgroundColor: "#ededed"
        ,width: '90%'
        ,marginLeft: '5%'
        ,marginTop: '5%'
        ,fontSize: 12
    }
})

export default Consultas


//#81df99 -- verde
//#83bedf -- azul