import React, { Component } from 'react';
import '../../assets/css/listaConsultas.css';
import axios from 'axios';
import Navegador from '../../components/Cabecalho/Navegador';
import jwt_decode from 'jwt-decode';

var decode;

class ListaConsultas extends Component{
    constructor(event){
        super(event);

        this.state = {
            lista : []
            ,descricao : ""
        }
    }

    BuscarConsultas(){
        axios.get('http://localhost:5000/api/Consultas',{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('SpMedicalGroup-chave-autenticacao')
                ,'Content-Type': 'application/json'
            }
        })
            .then(res => {
                const listaconsultas = res.data;
                // console.log(res);
                this.setState({ lista: listaconsultas })
            })
    }

    componentDidMount(){
        this.BuscarConsultas()
        this.atualizarToken()
        console.log(decode.tipoUsuario)
    }

    atualizarToken(){
        if(localStorage.getItem("SpMedicalGroup-chave-autenticacao") != null){
            let token = localStorage.getItem("SpMedicalGroup-chave-autenticacao");
            decode = jwt_decode(token);
        }
    }

    alteraStatusConsulta(event){
        event.preventDefault()

        console.log(event.target.name + " -- "+ event.target.value)



        let consulta = {
            Id: event.target.name
            ,IdTipoSituacao: 0
        }

        if(event.target.value === "Realizada"){
            consulta.situacao = 2
        }

        if(event.target.value === "Cancelada"){
            consulta.situacao = 1
        }

        axios.put('http://localhost:5000/api/Consultas', consulta, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('SpMedicalGroup-chave-autenticacao'),
                'Content-Type': 'application/json'
            }
            })
                .then(res => {
                    console.log(res)
                })
    }

    cancelaConsulta(){
        alert("Consulta foi cancelada")
    }

    adicionarDescricao(){
        alert("adicionar Descrição");
    }

    render(){

        let that = this;

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
                        <div key={consultalist.idConsulta} className="ListConsulta__Consultas">
                            <header className="ListConsulta__FormTop">
                                <div className="ListConsulta__Data">
                                {consultalist.dataConsulta}</div>
                                <div className="ListConsulta__Status">
                                Status : {consultalist.statusConsulta}
                                </div>
                            </header>
                
                            <main className="ListConsulta__FormMain">
                                <div className="ListConsulta__Paciente">
                                    <div className="ListConsulta__NomePaciente">
                                    {consultalist.nomePaciente}
                                    </div>
                                    <div className="ListConsulta__DataNascimento">
                                    {consultalist.dtNascimentoPaciente}
                                    </div>
                                </div>
                
                                <div className="ListConsulta__Medico">
                                    <div className="ListConsulta__NomeMedico">{consultalist.nomeMedico}</div>
                                    <div className="ListConsulta__Especialidade">
                                    {consultalist.especialidade}
                                    </div>
                                </div>
                
                                <div className="ListConsulta__Descricao">
                                    {consultalist.descricao}</div>

                                    {
                                        decode.tipoUsuario === "Administrador" ?
                                        (<div>
                                            <input type="button" onClick={that.alteraStatusConsulta.bind(this)} name={consultalist.id} value="Realizada" />
                                            <input type="button" onClick={that.alteraStatusConsulta.bind(this)} name={consultalist.id} value="Cancelada" />
                                        </div>) :
                                        ""
                                    }


                                    {
                                        decode.tipoUsuario === "Médico" ?
                                        (<input type="button" onClick={that.adicionarDescricao.bind(this)} value="Adicionar descrição" />) :
                                        ""
                                    }

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