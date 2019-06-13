import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import '../../assets/css/base.css';

class Navegador extends Component {
  constructor(event) {
    super(event);

    this.state = {
      decode: []
    }
  }

  componentDidMount() {
    this.atualizarToken();
  }

  atualizarToken() {
    if (localStorage.getItem("SpMedicalGroup-chave-autenticacao") != null) {
      let token = localStorage.getItem("SpMedicalGroup-chave-autenticacao");

      let decoded = jwt_decode(token);

      this.setState({ decode: decoded });
    }
  }

  render() {
    var that = this;
    return (
      <nav id="Navegador" className="Flex-cont">
        <div className="separador" />
        <ul className="Navegador Flex-cont">

          <div><a href="/">Inicio</a></div>

          {that.state.decode.tipoUsuario === "Administrador" ?
            (<div>
              <a href="/MenuCadastro">Cadastros</a>
            </div>)
            :
            that.state.decode.tipoUsuario === "Médico" || "Paciente"?
              (<div>
                <a href="/ListaConsultas">Consultas</a>
              </div>)
              : console.log("Nenhum usuario logado")
          }

          {that.state.decode.tipoUsuario === "Administrador" ?
            <div><a href="/ListaConsultas">Consultas</a></div> : ""}
              
          {that.state.decode.tipoUsuario === "Administrador" || "Médico" ?
            <div><a href="/ListaLocalizacao">Mapa</a></div> : ""}

          <div><a href="/login">Login</a></div>
        </ul>
      </nav>
    )
  }
}

export default Navegador;