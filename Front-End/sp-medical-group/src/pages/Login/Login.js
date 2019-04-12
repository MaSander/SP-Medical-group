import React, { Component } from 'react';
import '../../assets/css/login.css';



class Login extends Component {

    render() {

        return (
            <main className="main__login">
                <span className="btnInicio"><a href="#">inicio</a></span>

                <div className="Formulario">
                    <div className="Cabecalho">
                        <div id="Logo">
                            {/* <img id="Logotipo" src="imgs/icon-login.png" alt="logo da sp medical group" /> */}
                        </div>
                        <h1 className="med_h1"><span className="med_span">Medical</span> Group</h1>
                    </div>
                    <div className="Fixa">
                        <h2>Login</h2>
                        <span>E-mail :
                    <input className="spn_fixa" type="email" name="email" />
                        </span>

                        <span>Senha :
                    <input className="spn_fixa" type="password" name="senha" />
                        </span>

                        <button className="btn_logar">Entrar</button>

                    </div>
                </div>
            </main>
        );
    }
}

export default Login;