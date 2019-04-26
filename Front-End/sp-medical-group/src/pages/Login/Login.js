import React, { Component } from 'react';
import '../../assets/css/login.css';
import axios from 'axios'


class Login extends Component {
    constructor() {
        super()

        this.state = {
            email: ''
            , senha: ''
        }
    }

    efetuarLogin(event) {
        event.preventDefault();

        localStorage.setItem("SpMedicalGroup-chave-autenticacao", null)

        axios.post('http://localhost:5000/api/Login', {
            email: this.state.email, senha: this.state.senha
        })
            .then(data => {
                localStorage.setItem("SpMedicalGroup-chave-autenticacao", data.data.token);
                this.props.history.push("/")
                // Listaconsultas
            })
            .catch(erro => { console.log(erro)});
    }

    atualizaEstadoEmail(event) {
        this.setState({ email: event.target.value })
    }

    atualizaEstadoSenha(event) {
        this.setState({ senha: event.target.value })
    }

    render() {

        return (
            <main className="main__login">
                <span className="btnInicio"><a href="/">inicio</a></span>

                <div className="login__Formulario">
                    <div className="Cabecalho">
                        <div id="Logo">
                            {/* <img id="Logotipo" src="imgs/icon-login.png" alt="logo da sp medical group" /> */}
                        </div>
                        <h1 className="med_h1"><span className="med_span">Medical</span> Group</h1>
                    </div>
                    <form onSubmit={this.efetuarLogin.bind(this)}>

                        <div className="Fixa">
                            <h2>Login</h2>
                            <span>E-mail :
                            <input className="spn_fixa"
                                    type="email"
                                    name="email"
                                    onChange={this.atualizaEstadoEmail.bind(this)}
                                    value={this.state.email}
                                />
                            </span>

                            <span>Senha :
                            <input className="spn_fixa"
                                    type="password"
                                    name="senha"
                                    onChange={this.atualizaEstadoSenha.bind(this)}
                                    value={this.state.senha}
                                />
                            </span>

                            <button className="btn_logar">Entrar</button>

                        </div>
                    </form>
                </div>
            </main>
        );
    }
}

export default Login;