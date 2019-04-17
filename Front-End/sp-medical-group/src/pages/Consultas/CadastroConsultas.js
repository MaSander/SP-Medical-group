import React, { Component } from 'react';
import '../../assets/css/cadastroConsultas.css';
import axios from 'axios';


class CadastroConsultas extends Component {
    constructor(event){
        super(event);

        this.state = {
            DataHota: ''
            ,IdProntuario: ''
            ,IdMedico: ''
            ,IdTipoSituacao: 1
            ,Descricao: ''
            ,listaMedicos: []
            ,listaProntuarios: []
        }
    }

    atualizaEstadoData(event){
        this.setState({ DataHota: event.target.value })
    }

    atualizaEstadoProntuario(event){
        this.setState({ IdProntuario: event.target.value })
    }

    atualizaEstadoMedico(event){
        this.setState({ IdMedico: event.target.value })
    }

    atualizaEstadoDescricao(event){
        this.setState({ Descricao: event.target.value })
    }

    efetuarCadastroConsulta(event){
        event.preventDefault();

        let consulta = {
            DataHota: this.state.DataHota
            ,IdProntuario: this.state.IdProntuario
            ,IdMedico: this.state.IdMedico
            ,IdTipoSituacao: this.state.IdTipoSituacao
            ,Descricao: this.state.Descricao
        }

        axios.post('http://localhost:5000/api/Consultas', consulta, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('SpMedicalGroup-chave-autenticacao'),
                'Content-Type': 'application/json'
            }
        })
        .then(data =>{
            console.log(data);
            alert("Consulta Cadastrada")
        })
        .catch(erro => console.log(erro))
    }


    render(){
        return(
            <div className="cadastroConsulta__body">
            <a href="/"></a>
    
            <h1>Cadastro de Consultas</h1>
    
            <div className="cadastroConsulta__main">
                <form className="cadastroConsulta__form"
                onSubmit={this.efetuarCadastroConsulta.bind(this)}>
                    
                    <input type="date"
                    onChange={this.atualizaEstadoData.bind(this)}
                    value={this.state.DataHota}
                    className="cadastroConsulta__form_nome"
                    placeholder="00/00/0000" />
    
                    <input type="text"
                    onChange={this.atualizaEstadoProntuario.bind(this)}
                    value={this.state.IdProntuario}
                    className="cadastroConsulta__form_nome"
                    placeholder="Nome do paciente" />
                    
                    <input type="text"
                    onChange={this.atualizaEstadoMedico.bind(this)}
                    value={this.state.IdMedico}
                    className="cadastroConsulta__form_nome"
                    placeholder="Nome do medico" />
    
                    <input type="text"
                    onChange={this.atualizaEstadoDescricao.bind(this)}
                    value={this.state.Descricao}
                    className="cadastroConsulta__form_nome"
                    placeholder="Descrição" />
                    
                    <button>Cadastrar</button>
                </form>
            </div>
        </div>
        );
    }
}

export default CadastroConsultas;