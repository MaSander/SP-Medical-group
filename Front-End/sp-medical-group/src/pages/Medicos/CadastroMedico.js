import React, { Component } from 'react';
import axios from 'axios';

export default class CadastroMedico extends Component {
    constructor(event){
        super(event);

        this.state = {
            IdUsuario: ""
            ,IdClinica: ""
            ,IdEspecialidade: ""
            ,Crm: ""
            ,Telefone: ""
        }
    }

    efetuarCadastroMedico(event){
        event.preventDefault()

        let medico = {
            IdUsuario: this.state.IdUsuario
            ,IdClinica: this.state.IdClinica
            ,IdEspecialidade: this.state.IdEspecialidade
            ,Crm: this.state.Crm
            ,Telefone: this.state.Telefone
        }

        axios("http://localhost:5000/api/Medicos", medico, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('SpMedicalGroup-chave-autenticacao'),
                'Content-Type': 'application/json'
            }
        })
        .then(data => {
            console.log(data);
            alert("Medico cadastrado com secusso!!");
        })
        .catch(erro => console.log(erro))

    }

    atualizarEstadoUsuario(event){
        this.setState({ IdUsuario: event.target.value })
    }

    atualizarEstadoClinica(event){
        this.setState({ IdClinica: event.target.value })
    }

    atualizarEstadoEspecialidade(event){
        this.setState({ IdEspecialidade: event.target.value })
    }

    atualizarEstadoCrm(event){
        this.setState({ Crm: event.target.value })
    }

    atualizarEstadoTelefone(event){
        this.setState({ Telefone: event.target.value })
    }
    
    
    render(){
        return(
        <div className="cadastroConsulta__body">
                <a href="/">inicio</a>

            <h1>Cadastro de Médico</h1>
    
            <div className="cadastroConsulta__main">
                <form className="cadastroConsulta__form"
                onSubmit={this.efetuarCadastroMedico.bind(this)}>
    
                    <input type="text"
                    onChange={this.atualizarEstadoUsuario.bind(this)}
                    value={this.state.IdUsuario}
                    className="cadastroConsulta__form_nome"
                    placeholder="usuario" />
                    
                    <input type="text"
                    onChange={this.atualizarEstadoClinica.bind(this)}
                    value={this.state.IdClinica}
                    className="cadastroConsulta__form_email"
                    placeholder="Clinica" />
                    
                    <input type="text"
                    onChange={this.atualizarEstadoEspecialidade.bind(this)}
                    value={this.state.IdEspecialidade}
                    className="cadastroConsulta__form_senha"
                    placeholder="Espeialidade" />

                    <input type="text"
                    onChange={this.atualizarEstadoCrm.bind(this)}
                    value={this.state.Crm}
                    className="cadastroConsulta__form_senha"
                    placeholder="Crm" />

                    <input type="text"
                    onChange={this.atualizarEstadoTelefone.bind(this)}
                    value={this.state.Telefone}
                    className="cadastroConsulta__form_senha"
                    placeholder="Telefone" />
                
                    <button className="cadastroConsulta__form_btn">Cadastrar</button>
                </form>
            </div>
        </div>
        )
    }
}