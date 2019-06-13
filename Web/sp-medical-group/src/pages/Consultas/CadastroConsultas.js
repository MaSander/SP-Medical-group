import React, { Component } from 'react';
import '../../assets/css/cadastros.css';
import axios from 'axios';


class CadastroConsultas extends Component {
    constructor(event) {
        super(event);

        this.state = {
            DataHota: ''
            , IdProntuario: ''
            , IdMedico: ''
            , IdTipoSituacao: 1
            , Descricao: ''
            , listaMedicos: []
            , listaProntuarios: []
        }
    }

    componentDidMount() {
        this.buscarProntuario();
        this.buscarMedico();
    }

    atualizaEstadoData(event) {
        this.setState({ DataHota: event.target.value })
    }

    atualizaEstadoProntuario(event) {
        this.setState({ IdProntuario: event.target.value })
    }

    atualizaEstadoMedico(event) {
        this.setState({ IdMedico: event.target.value })
    }

    atualizaEstadoDescricao(event) {
        this.setState({ Descricao: event.target.value })
    }

    efetuarCadastroConsulta(event) {
        event.preventDefault();

        let consulta = {
            DataHota: this.state.DataHota
            , IdProntuario: this.state.IdProntuario
            , IdMedico: this.state.IdMedico
            , IdTipoSituacao: this.state.IdTipoSituacao
            , Descricao: this.state.Descricao
        }

        axios.post('http://192.168.3.110:5000/api/Consultas', consulta, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('SpMedicalGroup-chave-autenticacao'),
                'Content-Type': 'application/json'
            }
        })
            .then(data => {
                console.log(data);
                alert("Consulta Cadastrada")
            })
            .catch(erro => console.log(erro))
    }

    buscarProntuario() {
        axios.get("http://192.168.3.110:5000/api/prontuarios", {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('SpMedicalGroup-chave-autenticacao'),
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                const resData = res.data;
                this.setState({ listaProntuarios: resData });
            }
            )
    }

    buscarMedico() {
        axios.get("http://192.168.3.110:5000/api/medicos", {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('SpMedicalGroup-chave-autenticacao'),
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                const resData = res.data;
                this.setState({ listaMedicos: resData });
            }
            )
    }

    render() {
        return (
            <div className="cadastro__body">

                <div><a href="/">inicio</a></div>
                <h1>Cadastro de Consultas</h1>

                <div className="cadastro__main">
                    <form className="cadastro__form"
                        onSubmit={this.efetuarCadastroConsulta.bind(this)}>

                        <input type="date"
                            onChange={this.atualizaEstadoData.bind(this)}
                            value={this.state.DataHota}
                            className="cadastro__input"
                            placeholder="00/00/0000" />

                        <select
                            className="cadastro__select"
                            onChange={this.atualizaEstadoProntuario.bind(this)}>
                            <option value={null}>Selecione o RG  do usuario</option>
                            {this.state.listaProntuarios.map((user) => {
                                return (
                                    <option value={user.id}>{user.rg}</option>
                                )
                            }
                            )}
                        </select>

                        <select
                            className="cadastro__select"
                            onChange={this.atualizaEstadoMedico.bind(this)}>
                            <option value={null}>Selecione o médico</option>
                            {this.state.listaMedicos.map((med) => {
                                return (
                                    <option value={med.id}>{med.nome}</option>
                                )
                            }
                            )}
                        </select>

                        <input type="text"
                            onChange={this.atualizaEstadoDescricao.bind(this)}
                            value={this.state.Descricao}
                            className="cadastro__input"
                            placeholder="Descrição" />

                        <button
                        className="cadastro__btnCadastro"
                        >Cadastrar</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CadastroConsultas;