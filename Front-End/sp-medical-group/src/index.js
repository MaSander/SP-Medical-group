import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/App';
import Login from './pages/Login/Login';
import ListaConsultas from './pages/Consultas/ListaConsultas';
import CadastraUsuario from './pages/Usuarios/CadastroUsuario';
import CadastraConsultas from './pages/Consultas/CadastroConsultas';
import CadastraProntuario from './pages/Prontuarios/CadastroProntuario';
import CadastraMedico from './pages/Medicos/CadastroMedico';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const rotas = ( 
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/login' component={Login} />
                <Route path='/Listaconsultas' component={ListaConsultas} />
                <Route path='/CadastraUsuario' component={CadastraUsuario} />
                <Route path='/CadastraConsulta' component={CadastraConsultas} />
                <Route path='/CadastraProntuario' component={CadastraProntuario} />
                <Route path='/CadastraMedico' component={CadastraMedico} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();