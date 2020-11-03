import React, {Component} from 'react'
import "./estilo.css"

class ListaCategoria extends Component{

    constructor() {
        super();
        this.state = {categorias:[]};
        this._novasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias){
        this.setState({...this.state,categorias});
    }

    _handlerEventoInput(event){
        if(event.key === "Enter"){
            let categoria = event.target.value;
            this.props.adicionarCategoria(categoria);
        }
    }

    render() {
        return(
            <section className="lista-categorias">
                <ul className="lista-categorias-lista">
                    {this.props.categorias.categorias.map((categoria, index) => {
                        return (<li key={index} className="lista-categorias-item">{categoria}</li>);
                    })}
                </ul>
                <input type="text"
                       className="lista-categorias-input"
                       placeholder="Adicionar categoria..."
                       onKeyUp={this._handlerEventoInput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaCategoria