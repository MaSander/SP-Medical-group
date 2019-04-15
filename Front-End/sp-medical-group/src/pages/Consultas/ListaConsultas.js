import React, { Component } from 'react';
import '../../assets/css/listaConsultas.css'
import axios from 'axios'

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
    
            <nav id="Navegador" className="Flex-cont ListConsulta__nav">
                <div className="separador"></div>
                <ul className="Navegador Flex-cont">
                    <div><a href="#">Consultas</a></div>
                    <div><a href="#">Clínicas</a></div>
                    <div><a href="#">Especialidades</a></div>
                </ul>
            </nav>
    
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
                                {consultalist.idMedicoNavigation.idEspecialidade}
                                </div>
                            </div>
            
                            <div className="ListConsulta__Descricao">
                                {consultalist.descricao}</div>
                        </main>
                    </div>
                    )
                })
            }

{/* this.state.lista.reverse().map(function (listadesejos) {
                                    return (
                                        <tr key={listadesejos.id}>
                                            <td>{listadesejos.desejo}</td>
                                        </tr>
                                    )
                                }) */}

    
            {/* <div className="ListConsulta__Consultas">
                <header className="ListConsulta__FormTop">
                    <div className="ListConsulta__Data">23/7/2019</div>
                    <div className="ListConsulta__Status">Status : Agendada</div>
                </header>
    
                <main className="ListConsulta__FormMain">
                    <div className="ListConsulta__Paciente">
                        <div className="ListConsulta__NomePaciente">husnuinan</div>
                        <div className="ListConsulta__DataNascimento">1/1/5</div>
                    </div>
    
                    <div className="ListConsulta__Medico">
                        <div className="ListConsulta__NomeMedico">papapapapapapa</div>
                        <div className="ListConsulta__Especialidade">brghevfijcdihe</div>
                    </div>
    
                    <div className="ListConsulta__Descricao">
                        descriçao barari balala
                    </div>
                </main>
            </div> */}
    
        </div>
        );
    }
}

export default ListaConsultas;