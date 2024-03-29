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
import CadastraLocalizacao from './pages/Locais/CadastroLocalizacao';
import ListaLocalizacao from './pages/Locais/ListaLocalizacao';
import MenuCadastro from './pages/Outros/MenuCadastros';
import { usuarioAutenticado } from '../src/services/auth'

import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const Permissao = ({component : Component}) => (
    <Route 
        render = {props => usuarioAutenticado() ?
        (<Component {...props} />) :
        (<Redirect to={{pathname : '/login', state : {from : props.location}}} />)
        }
    />
);

const rotas = ( 
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/login' component={Login} />
                <Permissao path='/Listaconsultas' component={ListaConsultas} />
                <Permissao path='/CadastraUsuario' component={CadastraUsuario} />
                <Permissao path='/CadastraConsulta' component={CadastraConsultas} />
                <Permissao path='/CadastraProntuario' component={CadastraProntuario} />
                <Permissao path='/CadastraMedico' component={CadastraMedico} />
                <Permissao path='/CadastraLocalizacao' component={CadastraLocalizacao} />
                <Permissao path='/ListaLocalizacao' component={ListaLocalizacao} />
                <Permissao path='/MenuCadastro' component={MenuCadastro} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();