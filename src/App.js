import React, {Component} from "react"
import ListaNotas from "./components/ListaNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaCategoria from "./components/ListaCategoria"
import "./assets/App.css"
import "./assets/index.css"
import Categorias from "./dados/Categorias";
import ArrayNotas from "./dados/Notas";

class App extends Component{

    constructor(props) {
        super(props);
        this.categorias = new Categorias();
        this.notas = new ArrayNotas();
    }

    render() {
        return (
          <section className="conteudo">
              <FormularioCadastro
                  criarNota={this.notas.adicionarNota.bind(this.notas)}
                  categorias={this.categorias}
              />
              <main className="conteudo-principal">
                  <ListaCategoria
                      categorias={this.categorias}
                      adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
                  />
                  <ListaNotas apagaNota={this.notas.excluirNota.bind(this.notas)}
                              notas={this.notas}/>
              </main>
          </section>
      );
    }
}

export default App;
