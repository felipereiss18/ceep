import React, {Component} from "react"
import ListaNotas from "./components/ListaNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css"
import "./assets/index.css"

class App extends Component{

    constructor(props) {
        super(props);
        this.notas = [];
        this.state = {
            notas:[]
        }
    }

    criarNota(titulo, texto){
        const novaNota = {titulo, texto};
        const novaArrayNotas = [...this.state.notas, novaNota];
        const novoEstado = {
            notas: novaArrayNotas
        }
        this.setState(novoEstado);
    }
    render() {
        return (
          <section className="conteudo">
              <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
              <ListaNotas notas={this.state.notas}/>
          </section>
      );
    }
}

export default App;
