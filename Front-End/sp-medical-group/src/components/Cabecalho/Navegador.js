import React, { Component } from 'react';

class Navegador extends Component {
    render(){
        return (
            <nav id="Navegador" className="Flex-cont" >
            <div className="separador" />
            <ul className="Navegador Flex-cont">
              <div><a href="/">Inicio</a></div>
              <div><a href="/ListaConsultas">Consultas</a></div>
              {/* <div><a href="#">Clínicas</a></div> */}
              <div><a href="/login">login</a></div>
              <div><a href="/CadastraUsuario">Add user</a></div>
            </ul>
          </nav>
        )
    }
}

export default Navegador;