import React, {Component} from 'react';
import '../../assets/css/cadastroUsuario.css';
import axios from 'axios'

class CadastroUsuario extends Component{
    constructor(event){
        super(event);

        this.state = {
            nome: ""
            ,email: ""
            ,senha: ""
            ,tipo: ""
            ,listaTipo: []
        }
    }

    atualizarEstadoNome(event){
        this.setState({ nome: event.target.value })
    }
    atualizarEstadoEmail(event){
        this.setState({ email: event.target.value })
    }
    atualizarEstadoSenha(event){
        this.setState({ senha: event.target.value })
    }
    atualizarEstadoTipo(event){
        this.setState({ tipo: event.target.value })
    }


    efetuarCadastroUsuario(event){
        event.preventDefault();

        let usuario = {
            Nome: this.state.nome
            ,Email: this.state.email
            ,Senha: this.state.senha
            ,IdTipoUsuario: this.state.tipo
        }

        axios.post('http://localhost:5000/api/Usuarios', usuario ,
        {
        headers:{
            'Authorization': 'Bearer ' + localStorage.getItem('SpMedicalGroup-chave-autenticacao'),
            'Content-Type': 'application/json'
        }
    })
        .then(data => {
            console.log(data);
            if(this.state.tipo === 3){
                this.props.history.push("/CadastraProntuario")
            } else if(this.state.tipo === 2){
                this.props.history.push("/CadastraMedico")
            }
        })
        .catch(erro => {console.log(erro)})
    }


    render(){
        return(
            <div className="cadastroConsulta__body">
                <a href="/">inicio</a>

            <h1>Cadastro de Usuario</h1>
    
            <div className="cadastroConsulta__main">
                <form className="cadastroConsulta__form"
                onSubmit={this.efetuarCadastroUsuario.bind(this)}>
    
                    <input type="text"
                    onChange={this.atualizarEstadoNome.bind(this)}
                    value={this.state.nome}
                    className="cadastroConsulta__form_nome"
                    placeholder="insira o nome do usuario" />
                    
                    <input type="email"
                    onChange={this.atualizarEstadoEmail.bind(this)}
                    value={this.state.email}
                    className="cadastroConsulta__form_email"
                    placeholder="insira o email do usuario" />
                    
                    <input type="password"
                    onChange={this.atualizarEstadoSenha.bind(this)}
                    value={this.state.senha}
                    className="cadastroConsulta__form_senha"
                    placeholder="insira a senha do usuario" />
                    
                    <select className="cadastroConsulta__form_tipo"
                    onChange={this.atualizarEstadoTipo.bind(this)}
                    value={this.state.tipo}>
                        <option value="0">
                            Selecione um tipo
                        </option>

                        <option value="1">
                        Adiministrador
                        </option>

                        <option value="2">
                        Médico
                        </option>

                        <option value="3">
                        Paciente
                        </option>
                    </select>

                    <button className="cadastroConsulta__form_btn">Cadastrar</button>
                </form>
            </div>
        </div>
        );
    }
}

export default CadastroUsuario;