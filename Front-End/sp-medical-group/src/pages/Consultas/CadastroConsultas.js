import React, { Component } from 'react'
import '../../assets/css/cadastroConsultas.css'

class CadastroConsultas extends Component {
    render(){
        return(
            <div>
            <a href="/"></a>
    
            <h1>Cadastro de Consultas</h1>
    
            <div>
                <form>
                    
                    <input type="date"
                    placeholder="00/00/0000" />
    
                    <input type="text"
                    placeholder="nome do paciente" />
                    
                    <input type="text"
                    placeholder="inome do medico" />
    
                    <input type="text"
                    placeholder="Descrições" />
                    
                    <button>Cadastrar</button>
                </form>
            </div>
        </div>
        );
    }
}

export default CadastroConsultas;