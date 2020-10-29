import React, {Component} from 'react'
import "./estilo.css"

class ListaCategoria extends Component{

    render() {
        return(
            <section className="lista-categoria">
                <ul className="lista-categoria-lista">
                    <li className="lista-categoria-item"></li>
                </ul>
                <input type="text" className="lista-categoria-input" placeholder="Adicionar categoria..."/>
            </section>
        );
    }
}

export default ListaCategoria