import React, { Component } from 'react'
import axios from 'axios';
import '../../assets/css/cadastros.css';

export default class CadastroLocalizacao extends Component {
    constructor(event) {
        super(event);

        this.state = {
            descricao: ''
            , latitude: ''
            , longitude: ''
            , especialidade: ''
            , dtNascimento: ''
        }
    }

    efetuarCadastro(event) {
        event.preventDefault()

        let local = {
            Descricao: this.state.descricao
            , Latitude: this.state.latitude
            , Longitude: this.state.longitude
            , Especialidade: this.state.especialidade
            , DtNascimento: this.state.dtNascimento
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
                <div><a href="/ListaLocalizacao">Mapa</a></div>



                <form
                    className="cadastro__form"
                    onSubmit={this.efetuarCadastro.bind(this)}>
                        <label>Latitude:
                    <input
                                className="cadastro__input"
                                placeholder="Informe a latitude"
                                name="latitude"
                                value={this.state.latitude}
                                onChange={this.atualizarEstado.bind(this)}
                                type="text"
                            />
                        </label>


                        <label>Longitude:
                    <input
                                className="cadastro__input"
                                placeholder="Informe a longitude"
                                name="longitude"
                                value={this.state.longitude}
                                onChange={this.atualizarEstado.bind(this)}
                            />
                        </label>


                        <label>Descrição:
                    <input
                                className="cadastro__input"
                                placeholder="passe a Descrição"
                                name="descricao"
                                value={this.state.descricao}
                                onChange={this.atualizarEstado.bind(this)}
                            />
                        </label>


                        <label>Especialidade (Médico):
                    <input
                                className="cadastro__input"
                                placeholder="Especialidade do Médico"
                                name="especialidade"
                                value={this.state.especialidade}
                                onChange={this.atualizarEstado.bind(this)}
                            />
                        </label>


                        <label>Data Nascimento
                    <input
                                className="cadastro__input"
                                name="dtNascimento"
                                value={this.state.dtNascimento}
                                onChange={this.atualizarEstado.bind(this)}
                                type="date"
                            />
                        </label>

                    <button
                        className="cadastro__btnCadastro"
                    >Cadastrar</button>
                </form>
            </div>
        )
    }
}