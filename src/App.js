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
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      barajas: [],
      hasTrunfo: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.verificar = this.verificar.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }
  // requisito 6 ativar a funçao de click por meio de onSaveButton trouxe a informação do state e criei um novo objeto e modifiquei no setState pegando o estado anterior e pasando a nova carta, e logo limpei tudo

  onSaveButtonClick() {
    console.log('teste');
    const { cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo } = this.state;
    // criar objeto novo
    const nuevaCarta = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };
    // pegar o estado anterior e pasar o estado novo
    this.setState((prevState) => ({
      barajas: [...prevState.barajas, nuevaCarta],
    }));
    // limpar o state
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
    // ciar validacion do hasTrunfo para requisito 7
    if (cardTrunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
    }
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
  // requisito 5 verificar os input e modificar o state depois da verificaçao

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

  buttonExcluir = () => {
    const { barajas } = this.state;
    const filtrarCarta = barajas.filter((el) => el.parentNode.removeChild());
    this.setState({
      barajas: filtrarCarta,
    });
    if (el.cardTrunfo) {
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  render() {
    // requisito 4 desestruturei os estados para usar em cada componente. e o valor das props sao os estados iniciais.asim ele fica dinamico
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardImage, cardRare, cardTrunfo,
      cardAttr3, isSaveButtonDisabled, barajas, hasTrunfo } = this.state;
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
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <div>
          {barajas.map((carta, index) => ( // requisito 8 pegar todas as cartas e suas props e os estads e renderizar na tela
            <Card
              key={ index }
              cardName={ carta.cardName }
              cardDescription={ carta.cardDescription }
              cardImage={ carta.cardImage }
              cardRare={ carta.cardRare }
              cardAttr1={ carta.cardAttr1 }
              cardAttr2={ carta.cardAttr2 }
              cardAttr3={ carta.cardAttr3 }
              cardTrunfo={ carta.cardTrunfo }
            />
          ))}
          <button
            type="button"
            data-testid="delete-button"
            onClick={ this.buttonExcluir }
          >
            Excluir
          </button>
        </div>
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
