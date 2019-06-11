import React, { Component } from 'react';
import '../../assets/css/home.css';
import Navegador from '../Cabecalho/Navegador'
import logo from '../../assets/img/icon-login.png'

class App extends Component {

  render() {

    return (

      <div>
        <header>
          <section id="Banner" className="Flex-cont">
            <div className="Logo">
              <img id="Logotipo" src={logo} alt="logo da sp medical group" />
            </div>

            <div className="Nome Flex-cont">
              <h1 className="med_h1"><span className="med_span">Medical</span> Group</h1>
            </div>

            <div className="Contato">
              <div className="telefone">
                <p>Telefone :</p>
                <p>90909-0909</p>
              </div>

              <div className="email">
                <p>E-mail</p>
                <p>spmedgroup@gmail.com</p>
              </div>
            </div>
          </section>

          <Navegador />

        </header>

        <main>
          <div className="Home__Sobre">
            <div className="barra"></div>
            <div className="Home__sobre_cont"><h2>Sobre</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quia harum nesciunt amet consectetur,
                  optio ducimus. Quisquam at, corporis saepe error illum,
                  fugiat culpa tempora nostrum ipsa fuga perferendis dolorem
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quia harum nesciunt amet consectetur,
                  optio ducimus. Quisquam at, corporis saepe error illum,
                  fugiat culpa tempora nostrum ipsa fuga perferendis
                dolorem explexplicabo.</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;