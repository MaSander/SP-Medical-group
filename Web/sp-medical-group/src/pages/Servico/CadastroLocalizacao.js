import React, { Component } from 'react'
import axios from 'axios';

export default class CadastroLocalizacao extends Component {
    constructor(event) {
        super(event);

        this.state = {
            descricao: ''
            ,latitude: ''
            ,longitude: ''
            ,especialidade: ''
            ,dtNascimento: ''
        }
    }

    efetuarCadastro(event){
        event.preventDefault()

        let local = {
            Descricao: this.state.descricao
            ,Latitude: this.state.latitude
            ,Longitude: this.state.longitude
            ,Especialidade: this.state.especialidade
            ,DtNascimento: this.state.dtNascimento
        }

        axios.post("http://192.168.3.110:5000/api/localizacoes", local, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('SpMedicalGroup-chave-autenticacao'),
                'Content-Type': 'application/json'
            }
        }).then(data => {
            alert("Localização cadastrada")
            console.log(data)
        })
    }

    atualizarEstado(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div>
                <h2>Cadastro de localização</h2>
                <div><a href="/">inicio</a></div>
                <div><a href="/ListaLocalizacao">Lista</a></div>
                <br></br>
                <br></br>
                
                <form onSubmit={this.efetuarCadastro.bind(this)}>

                    <div>
                        <label>Latitude:
                    <input
                                placeholder="Informe a latitude"
                                name="latitude"
                                value={this.state.latitude}
                                onChange={this.atualizarEstado.bind(this)}
                                type="text"
                            />
                        </label>
                        <br></br>

                        <label>Longitude:
                    <input
                                name="longitude"
                                value={this.state.longitude}
                                onChange={this.atualizarEstado.bind(this)}
                            />
                        </label>
                        <br></br>

                        <label>Descrição:
                    <input
                                name="descricao"
                                value={this.state.descricao}
                                onChange={this.atualizarEstado.bind(this)}
                            />
                        </label>
                        <br></br>

                        <label>Especialidade (Médico):
                    <input
                                name="especialidade"
                                value={this.state.especialidade}
                                onChange={this.atualizarEstado.bind(this)}
                            />
                        </label>
                        <br></br>

                        <label>Data Nascimento
                    <input
                                name="dtNascimento"
                                value={this.state.dtNascimento}
                                onChange={this.atualizarEstado.bind(this)}
                                type="date"
                            />
                        </label>
                    </div>
                    <button
                    // onSubmit={this.efetuarCadastro()}
                    >Cadastrar</button>
                </form>
            </div>
        )
    }
}