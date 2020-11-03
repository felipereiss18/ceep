import React, {Component} from "react"
import "./estilo.css"

class FormularioCadastro extends Component{

    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
        this.categoria = "";
        this.state = {categorias:[]}
        this._novasCategorias = this._novasCategorias.bind(this)
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias){
        this.setState({...this.state, categorias})
    }

    _handleTitulo(event){
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    _handleTexto(event){
        event.stopPropagation();
        this.texto = event.target.value;
    }

    _criarNota(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.criarNota(this.titulo, this.texto, this.categoria)
    }

    _handleCategoria(event){
        this.categoria = event.target.value;
    }

    render() {
        return (
            <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
                <select className="form-cadastro_input" onChange={this._handleCategoria.bind(this)}>
                    <option defaultChecked={true}>Sem Categoria</option>
                    {this.state.categorias.map((categoria, index) => {
                        return <option key={index}>{categoria}</option>
                    })}
                </select>
                <input type="text" 
                       placeholder="Título" 
                       className="form-cadastro_input"
                        onChange={this._handleTitulo.bind(this)}/>
                <textarea rows={15}
                          placeholder="Escreva sua nota..."
                          className="form-cadastro_input"
                          onChange={this._handleTexto.bind(this)}/>
                <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;