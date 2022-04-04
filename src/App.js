import React, {Component} from 'react';
import TabelaHead from './components/TabelaHead';
import TabelaBody from './components/TabelaBody';
import TabelaFoot from './components/TabelaFood';

class App extends Component{
  state = {
    livros:[]
  };

  componentDidMount(){
    fetch("/api/livros.json")
    .then(response => response.json())
    .then(livros => this.setState({livros}))
    .catch(function(error){
      console.log("Erro na requisição");
    })
    .finally(function(){
      console.log("Sempre retorna  Ihuuu");
    });
  };

  handleRemoveLinha = (id) => {
    const livros = this.state.livros.filter(l => l.id !== id);
    this.setState({livros});
  };

  handleOrdenarCrescente = titulo => {
    const livros = this.state.livros.sort((a, b) => a.titulo < b.titulo ? -1 : 0);
    this.setState({livros});
  };

  handleOrdenarDecrescente = titulo => {
    const livros = this.state.livros.sort((a, b) => a.titulo < b.titulo ? -1 : 0); 
    livros.reverse();
    this.setState({livros});
  };

  handleOrdemIsbnCrescente = id => {
    const livros = this.state.livros.sort((a, b) => a.id < b.id ? -1 : 0); 
    this.setState({livros});
  }
  handleOrdemIsbnDecrescente = id => {
    const livros = this.state.livros.sort((a, b) => a.titulo < b.titulo ? -1 : 0); 
    livros.reverse();
    this.setState({livros});
  };


  render() {
    return(
      <table className="tabela">
        <TabelaHead
          ordemIsbnCrescente={this.handleOrdemIsbnCrescente}
          ordemIsbnDecrescente={this.handleOrdemIsbnDecrescente}
          ordenarCrescente={this.handleOrdenarCrescente}
          ordenarDecrescente={this.handleOrdenarDecrescente}        
        />
        <TabelaBody 
          livros={this.state.livros}
          removerLinha={this.handleRemoveLinha}
        />
        <TabelaFoot qdeLivros={this.state.livros.length}/>
      </table>
    );
  }
}

export default App;
