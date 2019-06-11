import React, { Component } from 'react'
import axios from 'axios'

export default class CadastroProntuario extends Component {

    constructor(event) {
        super(event)

        this.state = {
            IdUsuario: ""
            , Telefone: ""
            , Endereco: ""
            , DtNascimento: ""
            , Rg: ""
            , Cpf: ""
            , listaUsuarios: []
        }
    }

    componentDidMount() {
        this.buscarUsuarios();
    }

    efetuarCadastroProntuario(event) {
        event.preventDefault()

        let prontuario = {
            IdUsuario: this.state.IdUsuario
            , Telefone: this.state.Telefone
            , Endereco: this.state.Endereco
            , DtNascimento: this.state.DtNascimento
            , Rg: this.state.Rg
            , Cpf: this.state.Cpf
        }

        axios.post('http://192.168.3.110:5000/api/Prontuarios', prontuario, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('SpMedicalGroup-chave-autenticacao'),
                'Content-Type': 'application/json'
            }
        })
            .then(data => {
                console.log(data);
                alert("Usuario cadastrado com sucesso!!!");
            })
    }

    buscaListaUsuario() {
        axios.get('http://192.168.3.110:5000/api/Usuarios/Usuarios')
    }

    atualizaEstadoUsuario(event) {
        this.setState({ IdUsuario: event.target.value })
    }

    atualizaEstadoTelefone(event) {
        this.setState({ Telefone: event.target.value })
    }

    atualizaEstadoEndereco(event) {
        this.setState({ Endereco: event.target.value })
    }

    atualizaEstadoDtNascimento(event) {
        this.setState({ DtNascimento: event.target.value })
    }

    atualizaEstadoRg(event) {
        this.setState({ Rg: event.target.value })
    }

    atualizaEstadoCpf(event) {
        this.setState({ Cpf: event.target.value })
    }

    buscarUsuarios() {
        axios.get("http://192.168.3.110:5000/api/Usuarios/Usuarios", {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('SpMedicalGroup-chave-autenticacao'),
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                const resData = res.data;
                this.setState({ listaUsuarios: resData });
            }
            )
    }

    render() {
        return (
            <div className="cadastroConsulta__body">

                <div><a href="/">inicio</a></div>
                <h1>Cadastro de Prontuario</h1>

                <div className="cadastroConsulta__main">
                    <form className="cadastroConsulta__form"
                        onSubmit={this.efetuarCadastroProntuario.bind(this)}>

                        <select
                            onChange={this.atualizaEstadoUsuario.bind(this)}>
                            <option value={null}>Selecione o usuario</option>
                            {this.state.listaUsuarios.map((user) => {
                                if (user.tipoUsuario == 3) {
                                    return (
                                        <option value={user.id}>{user.email}</option>
                                    )
                                }
                            }
                            )}
                        </select>

                        <input type="text"
                            onChange={this.atualizaEstadoTelefone.bind(this)}
                            value={this.state.Telefone}
                            className="cadastroConsulta__form_nome"
                            placeholder="Telefone" />

                        <input type="text"
                            onChange={this.atualizaEstadoEndereco.bind(this)}
                            value={this.state.Endereco}
                            className="cadastroConsulta__form_nome"
                            placeholder="Endereço" />

                        <input type="date"
                            onChange={this.atualizaEstadoDtNascimento.bind(this)}
                            value={this.state.DtNascimento}
                            className="cadastroConsulta__form_nome"
                            placeholder="00/00/0000" />

                        <input type="text"
                            onChange={this.atualizaEstadoRg.bind(this)}
                            value={this.state.Rg}
                            className="cadastroConsulta__form_nome"
                            placeholder="RG" />

                        <input type="text"
                            onChange={this.atualizaEstadoCpf.bind(this)}
                            value={this.state.Cpf}
                            className="cadastroConsulta__form_nome"
                            placeholder="CPF" />

                        <button>Cadastrar</button>
                    </form>
                </div>
            </div>
        )
    }
}