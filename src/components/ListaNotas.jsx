import React, {Component} from "react";
import CardNota from "./CardNota";

class ListaNotas extends Component{

    render() {
        return (
          <ul>
              {Array.of("Trabalho", "Trabalho", "Estudos").map(categoria => {
                  return (
                      <li>
                          <div>{categoria}</div>
                          <CardNota/>
                      </li>
                  );
              })}
          </ul>
        );
    }
}

export default ListaNotas