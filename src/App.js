import React, {Component} from "react"
import ListaNotas from "./components/ListaNotas";
import FormularioCadastro from "./components/FormularioCadastro";

class App extends Component{
    render() {
        return (
          <section>
              <FormularioCadastro/>
              <ListaNotas/>
          </section>
      );
    }

}

export default App;
