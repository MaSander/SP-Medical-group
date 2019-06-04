import React,{Component} from 'react'

export default class ListaLocalizacao extends Component{
    constructor(event){
        super(event);

        this.state = {
            lista: []
        }
    }

    render(){
        return(
            <div>
                <h2>Lista de localização</h2>
                <div><a href="/">inicio</a></div>
            </div>
        )
    }
}