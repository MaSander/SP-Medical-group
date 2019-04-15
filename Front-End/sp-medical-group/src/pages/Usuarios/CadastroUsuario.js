import React, {Component} from 'react';

class CadastroUsuario extends Component{
    render(){
        return(
            <div>
                <a href="/">inicio</a>

            <h1>Cadastro de Usuario</h1>
    
            <div>
                <form>
    
                    <input type="text"
                    placeholder="insira o nome do usuario" />
                    
                    <input type="email"
                    placeholder="insira o email do usuario" />
                    
                    <input type="password"
                    placeholder="insira a senha do usuario" />
                    
                    <input type="date"
                    placeholder="00/00/0000" />
                    
                    <button>Cadastrar</button>
                </form>
            </div>
        </div>
        );
    }
}

export default CadastroUsuario;