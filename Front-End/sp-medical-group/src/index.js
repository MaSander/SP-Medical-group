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
import { usuarioAutenticado } from '../src/services/auth'

import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const CadastraUsuarioPermissao = ({component : Component}) => (
    <Route 
        render = {props => usuarioAutenticado() ?
        (<Component {...props} />) :
        (<Redirect to={{pathname : '/login', state : {from : props.location}}} />)
        }
    />
);

const CadastraConsultaPermissao = ({component : Component}) => (
    <Route 
        render = {props => usuarioAutenticado() ?
        (<Component {...props} />) :
        (<Redirect to={{pathname : '/login', state : {from : props.location}}} />)
        }
    />
)
;
const CadastraProntuarioPermissao = ({component : Component}) => (
    <Route 
        render = {props => usuarioAutenticado() ?
        (<Component {...props} />) :
        (<Redirect to={{pathname : '/login', state : {from : props.location}}} />)
        }
    />
);
const CadastraMedicoPermissao = ({component : Component}) => (
    <Route 
        render = {props => usuarioAutenticado() ?
        (<Component {...props} />) :
        (<Redirect to={{pathname : '/login', state : {from : props.location}}} />)
        }
    />
);
const ListaconsultasPermissao = ({component : Component}) => (
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
                <ListaconsultasPermissao path='/Listaconsultas' component={ListaConsultas} />
                <CadastraUsuarioPermissao path='/CadastraUsuario' component={CadastraUsuario} />
                <CadastraConsultaPermissao path='/CadastraConsulta' component={CadastraConsultas} />
                <CadastraProntuarioPermissao path='/CadastraProntuario' component={CadastraProntuario} />
                <CadastraMedicoPermissao path='/CadastraMedico' component={CadastraMedico} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();