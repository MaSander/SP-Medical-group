import React, { Component } from 'react';
import '../../assets/css/menuCadastros.css'

export default class MenuCadastros extends Component {
    render() {
        return (
            <div className='main_MenuCadastro'>
                <h2>Cadastros</h2>
                <a href='/'>inicio</a>
                <div className='links_MenuCadastro'>
                    <a className="link_a_MenuCadastro" href='/CadastraUsuario'>usuario</a>
                    <a className="link_a_MenuCadastro" href='/CadastraConsulta'>Consultas</a>
                    <a className="link_a_MenuCadastro" href='/CadastraProntuario'>Prontuario</a>
                    <a className="link_a_MenuCadastro" href='/CadastraLocalizacao'>Localização</a>
                </div>
            </div>
        )
    }
}