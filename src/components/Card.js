import React from 'react';
import propTypes from 'prop-types'

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div>
        <p
          data-testid="name-card"
        >
          { cardName }
        </p>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card">{ cardAttr1 }</p>
        <p data-testid="attr2-card">{ cardAttr2}</p>
        <p data-testid="attr3-card">{ cardAttr3 }</p>
        <p data-testid="rare-card">{ cardRare }</p>
        {
          cardTrunfo ? (
            <p data-testid="trunfo-card">Super Trunfo</p>
          ) : null
        }

      </div>
    );
  }
}
Card.propType = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.number.isRequired,
  cardAttr2: propTypes.number.isRequired,
  cardAttr3: propTypes.number.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
}

/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators 
Operador condicional (ternário)
O operador condicional é o único operador JavaScript que utiliza três operandos. 
O operador pode ter um de dois valores baseados em uma condição. A sintaxe é:
condicao ? valor1 : valor2
Se condicao for verdadeira, o operador terá o valor de valor1. Caso contrário, terá o valor de valor2. 
Você pode utilizar o operador condicional em qualquer lugar onde utilizaria um operador padrão.
Por exemplo,
var status = (idade >= 18) ? "adulto" : "menor de idade";
Copy to Clipboard
Esta declaração atribui o valor "adulto" à variável status caso idade seja dezoito ou mais. 
Caso contrário, atribui o valor "menor de idade".*/

export default Card;
