import React, { Component } from 'react';
import '../../assets/css/home.css';
// import 'https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300';

// import logo from '../../assets/img/icon-login.png';

class App extends Component {

  render() {

    return (

      <div>

        <header>
          <section id="Banner" className="Flex-cont">
            <div className="Logo">
              {/* <img src={logo} alt="logo da Sp Medical Group" /> */}
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

          <nav id="Navegador" className="Flex-cont" >
            <div className="separador" />
            <ul className="Navegador Flex-cont">
              <div><a href="/ListaConsultas">Consultas</a></div>
              <div><a href="#">Clínicas</a></div>
              <div><a href="/login">login</a></div>
            </ul>
          </nav>
        </header>

        <main>
          <div className="Sobre">
            <div className="barra"></div>
            <div><h2>Sobre</h2>
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