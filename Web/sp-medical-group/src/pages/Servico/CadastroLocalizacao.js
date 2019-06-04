import React,{Component} from 'react'
import axios from 'axios';

export default class CadastroLocalizacao extends Component{
    constructor(event){
        super(event);

        this.state = {
            descricao: ''
            ,latitude: ''
            ,longitude: ''
            ,especialidade: ''
            ,dtNascimento: ''
        }
    }

    efetuarCadastro(event){
        event.preventDefault()

        let local

        axios.post("http://192.168.3.110:5000/api/localizacoes", local, {
            headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem('SpMedicalGroup-chave-autenticacao'),
                            'Content-Type': 'application/json'
                        }
        }).then(data =>{
            alert("Localização cadastrada")
            console.log(data)
        })
    }

    atualizarEstado(event){
        this.setState({ [event.target.name] : event.target.value })
    }

    render(){
        return(
            <div>
                <h2>Cadastro de localização</h2>
                <div><a href="/">inicio</a></div>
                <div><a href="/ListaLocalizacao">Mapa</a></div>
                <br></br>
                <br></br>
                <div>
                    <label>Latitude:
                    <input
                    placeholder="Informe a latitude"
                    name="latitude"
                    value={this.state.latitude}
                    />
                    </label>
                    <br></br>

                    <label>Longitude:
                    <input
                    name="longitude"
                    value={this.state.longitude}
                    />
                    </label>
                    <br></br>

                    <label>Descrição:
                    <input
                    name="descricao"
                    value={this.state.descricao}
                    />
                    </label>
                    <br></br>

                    <label>Especialidade (Médico):
                    <input
                    name="especialidade"
                    value={this.state.especialidade}
                    />
                    </label>
                    <br></br>
                    
                    <label>Data Nascimento
                    <input
                    name="dtNascimento"
                    value={this.state.dtNascimento}
                    />
                    </label>
                </div>
            </div>
        )
    }
}