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
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.verificar = this.verificar.bind(this);
  }

  // requisito 4 passar o evento de onchange a funcao oninputchange
  onInputChange = (event) => {
    if (event.target.name === 'cardTrunfo') return this.setState({ cardTrunfo: true });
    this.setState({
      [event.target.name]: event.target.value,
    }, () => {
      this.verificar();
    });
  }

  verificar = () => {
    const { cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;
    const numMax = 210;
    const numUnic = 90;
    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    if (cardName.length > 0 && cardDescription.length > 0
    && cardImage.length > 0
    && cardRare.length > 0
    && sum <= numMax
    && cardAttr1 >= 0 && cardAttr1 <= numUnic
    && cardAttr2 >= 0 && cardAttr2 <= numUnic
    && cardAttr3 >= 0 && cardAttr3 <= numUnic) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    // requisito 4 desestruturei os estados para usar em cada componente. e o valor das props sao os estados iniciais.asim ele fica dinamico
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardImage, cardRare, cardTrunfo,
      cardAttr3, isSaveButtonDisabled, onSaveButtonClick } = this.state;
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
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
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
