import React, {Component} from "react";
import CardNota from "../CardNota";
import "./estilo.css"

class ListaNotas extends Component{

    constructor(props) {
        super(props);
        this.state = {notas:[]};
        this._novasNotas = this._novasNotas.bind(this)
    }

    componentDidMount() {
        this.props.notas.inscrever(this._novasNotas);
    }

    componentWillUnmount() {
        this.props.notas.desinscrever(this._novasNotas);
    }

    _novasNotas(notas){
           this.setState({...this.state, notas});
    }

    render() {
        return (
          <ul className="lista-notas">
              {this.state.notas.map((nota, index) => {
                  return (
                      <li className="lista-notas_item" key={index}>
                          <CardNota
                              indice={index}
                              titulo={nota.titulo}
                              texto={nota.texto}
                              apagaNota={this.props.apagaNota}
                              categoria={nota.categoria}
                          />
                      </li>
                  );
              })}
          </ul>
        );
    }
}

export default ListaNotas