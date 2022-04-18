import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    // requisito 4 pasei o estado inicial das minhas variaveis
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  // requisito 4 passar o evento de onchange a funcao oninputchange
  onInputChange = (event) => {
    if (event.target.name === 'cardTrunfo') return this.setState({ cardTrunfo: true });
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    // requisito 4 desestruturei os estados para usar em cada componente. e o valor das props sao os estados iniciais.asim ele fica dinamico
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardImage, cardRare, cardTrunfo, cardAttr3 } = this.state;
    return (
      <div>
        <h1>Adicionar Nova Carta</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}
export default App;
