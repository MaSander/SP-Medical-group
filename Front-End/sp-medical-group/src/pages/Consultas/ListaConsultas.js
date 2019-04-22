import React, { Component } from 'react';
import '../../assets/css/listaConsultas.css'
import axios from 'axios'
import Navegador from '../../components/Cabecalho/Navegador'

// const Urls = {
//     medicos : 'http://localhost:5000/api/Consultas/Paciente'
//     ,pacientes : 'http://localhost:5000/api/Consultas/Medico'
//     ,adiministrador : 'http://localhost:5000/api/Consultas/Adiministrador'
// }

class ListaConsultas extends Component{
    constructor(event){
        super(event);

        this.state = {
            lista : []
        }
    }

    BuscarConsultas(){
        axios.get('http://localhost:5000/api/Consultas/Paciente',{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('SpMedicalGroup-chave-autenticacao'),
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                const listaconsultas =res.data;
                console.log(res);
                this.setState({ lista: listaconsultas })
            })
    }

    componentDidMount(){
        this.BuscarConsultas()
    }

    render(){
        return (
            <div className="ListConsulta__">    
    
            <Navegador />

            <div className="ListConsulta__Sumario">
                <h2> Consultas</h2>
    
                <div className="ListConsulta__Dica"></div>
                <h3 className="ListConsulta__h3">
                    <div className="ListConsulta__blDica-ag"></div>Agendada
                </h3>
                <h3 className="ListConsulta__h3">
                    <div className="ListConsulta__blDica-cl"></div>Concluida
                </h3>
                <h3 className="ListConsulta__h3">
                    <div className="ListConsulta__blDica-cc"></div>Cancelada
                </h3>
            </div>


            {
                this.state.lista.map(function (consultalist){
                    return(
                        <div className="ListConsulta__Consultas">
                        <header className="ListConsulta__FormTop">
                            <div className="ListConsulta__Data">
                            {consultalist.dataHota}</div>
                            <div className="ListConsulta__Status">
                            Status : {consultalist.idTipoSituacaoNavigation.nome}
                            </div>
                        </header>
            
                        <main className="ListConsulta__FormMain">
                            <div className="ListConsulta__Paciente">
                                <div className="ListConsulta__NomePaciente">
                                {consultalist.idProntuarioNavigation.idUsuarioNavigation.nome}
                                </div>
                                <div className="ListConsulta__DataNascimento">
                                {consultalist.idProntuarioNavigation.dtNascimento}
                                </div>
                            </div>
            
                            <div className="ListConsulta__Medico">
                                <div className="ListConsulta__NomeMedico">{consultalist.idMedicoNavigation.idUsuarioNavigation.nome}</div>
                                <div className="ListConsulta__Especialidade">
                                {consultalist.idMedicoNavigation.idEspecialidadeNavigation.nome}
                                </div>
                            </div>
            
                            <div className="ListConsulta__Descricao">
                                {consultalist.descricao}</div>
                        </main>
                    </div>
                    )
                })
            }
        </div>
        );
    }
}

export default ListaConsultas;