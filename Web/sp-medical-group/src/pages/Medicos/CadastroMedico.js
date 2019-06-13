import React, { Component } from 'react';
import axios from 'axios';
import '../../assets/css/cadastros.css';

export default class CadastroMedico extends Component {
    constructor(event){
        super(event);

        this.state = {
            IdUsuario: ""
            ,IdClinica: ""
            ,IdEspecialidade: ""
            ,Crm: ""
            ,Telefone: ""
            ,listaUsuarios : []
            ,listaClinicas : []
            ,listaEspecialidades: []
        }
    }

    componentDidMount(){
        this.buscarUsuarios()
        this.buscarClinicas()
        this.buscarEspecialidades()
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

        axios.post("http://192.168.3.110:5000/api/Medicos", medico, {
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

    buscarUsuarios(){
        axios.get("http://192.168.3.110:5000/api/Usuarios/Usuarios", {  
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('SpMedicalGroup-chave-autenticacao'),
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
                const resData = res.data;
                this.setState({ listaUsuarios : resData });
            }
        )
    }

    buscarClinicas(){
        axios.get("http://192.168.3.110:5000/api/Clinicas")
        .then(res => {
                const resClinicas = res.data;
                this.setState({ listaClinicas : resClinicas }
                );
            }
        )
    }
    
    buscarEspecialidades(){
        axios.get("http://192.168.3.110:5000/api/Especialidades")
        .then(res => {
                const resEspeialidades = res.data;
                this.setState({ listaEspecialidades : resEspeialidades }
                );
            }
        )
    }
    
    
    render(){
        return(
        <div className="cadastroConsulta__body">
                <a href="/">inicio</a>

            <h1>Cadastro de Médico</h1>
    
            <div className="cadastroConsulta__main">
                <form className="cadastroConsulta__form"
                onSubmit={this.efetuarCadastroMedico.bind(this)}>

                    <select
                    onChange={this.atualizarEstadoUsuario.bind(this)}>
                        <option value={null}>Selecione o usuario</option>
                            {this.state.listaUsuarios.map((user) => {
                                if(user.tipoUsuario == 2){
                                    return(
                                            <option value={user.id}>{user.email}</option>
                                    )
                                }
                            }
                            )}
                    </select>

                    <select
                    onChange={this.atualizarEstadoClinica.bind(this)}>
                        <option value={null}>Selecione a clínica</option>
                            {this.state.listaClinicas.map((clinica) => {
                                    return(
                                            <option value={clinica.id}>{clinica.nomeFantasia}</option>
                                    ) 
                            }
                            )}
                    </select>
                    
                    <select
                    onChange={this.atualizarEstadoEspecialidade.bind(this)}>
                        <option value={null}>Selecione a especialidade</option>
                            {this.state.listaEspecialidades.map((especi) => {
                                    return(
                                            <option value={especi.id}>{especi.nome}</option>
                                    ) 
                            }
                            )}
                    </select>

                    
                    {/* <input type="text"
                    onChange={this.atualizarEstadoEspecialidade.bind(this)}
                    value={this.state.IdEspecialidade}
                    className="cadastroConsulta__form_senha"
                    placeholder="Espeialidade" /> */}

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