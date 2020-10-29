import React, {Component} from "react";
import CardNota from "../CardNota";
import "./estilo.css"

class ListaNotas extends Component{

    render() {
        return (
          <ul className="lista-notas">
              {this.props.notas.map((nota, index) => {
                  return (
                      <li className="lista-notas_item" key={index}>
                          <CardNota
                              indice={index}
                              titulo={nota.titulo}
                              texto={nota.texto}
                              apagaNota={this.props.apagaNota}  />
                      </li>
                  );
              })}
          </ul>
        );
    }
}

export default ListaNotas