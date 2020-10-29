import React, {Component} from "react"
import ListaNotas from "./components/ListaNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaCategoria from "./components/ListaCategoria"
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

    deletaNota(index){
        let arrayNota = this.state.notas;
        arrayNota.splice(index,1);

        this.setState({notas:arrayNota})
    }

    render() {
        return (
          <section className="conteudo">
              <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
              <main className="conteudo-principal">
                  <ListaCategoria/>
              </main>
              <ListaNotas apagaNota={this.deletaNota.bind(this)} notas={this.state.notas}/>
          </section>
      );
    }
}

export default App;
