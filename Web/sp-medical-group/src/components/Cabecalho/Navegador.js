import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';


// var decode;

class Navegador extends Component {
  constructor(event){
    super(event);

    this.state = {
      decode : []
    }
  }

  componentDidMount() {
    this.atualizarToken();
  }

  atualizarToken() {
    // this.setState({ decode : "" })
    if (localStorage.getItem("SpMedicalGroup-chave-autenticacao") != null) {
      let token = localStorage.getItem("SpMedicalGroup-chave-autenticacao");

      let decoded = jwt_decode(token);

      this.setState({ decode :  decoded});
    }
  }

  render() {
    var that = this;
    return (
      <nav id="Navegador" className="Flex-cont" >
        <div className="separador" />
        <ul className="Navegador Flex-cont">

          <div><a href="/">Inicio</a></div>

          {that.state.decode.tipoUsuario === "Administrador" ?
            (<div>
              <a href="/CadastraUsuario">Add user</a>
            </div>)
            :
            that.state.decode.tipoUsuario === "Médico" ?
            (<div>
              <a href="/ListaConsultas">Consultas</a>
            </div>)
            :
            that.state.decode.tipoUsuario === "Paciente" ?
            (<div>
              <a href="/ListaConsultas">Consultas</a>
            </div>)
            :console.log("Nenhum usuario logado")
          }

          {that.state.decode.tipoUsuario === "Administrador" ?
          <div><a href="/ListaConsultas">Consultas</a></div>: ""}
          {that.state.decode.tipoUsuario === "Administrador" ?
          <div><a href="/CadastraLocalizacao">Locais</a></div>: ""}

          {that.state.decode.tipoUsuario === null ?
            // (<div><a href="/login">Sair</a></div>)
            alert(that.state.decode.tipoUsuario)
            :
            (<div><a href="/login">Login</a></div>)
          }
          {/* <div><a href="/login">Login</a></div> */}
        </ul>
      </nav>
    )
  }
}

export default Navegador;