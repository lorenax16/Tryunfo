import React from 'react';
import propTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { nomeFiltrado, cartaRara,
      filter, cartaTrunfo } = this.props;
    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          name="nomeFiltrado"
          value={ nomeFiltrado }
          onChange={ filter }
        />
        <label htmlFor="raridade">
          raridade
          <select
            data-testid="rare-filter"
            id="raridade"
            name="cartaRara"
            value={ cartaRara }
            onChange={ filter }
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="super2">
          Super Trunfo
          <input
            name="cartaTrunfo"
            type="checkbox"
            id="super2"
            data-testid="trunfo-filter"
            checked={ cartaTrunfo }
            onChange={ filter }
          />
        </label>
      </div>
    );
  }
}
Filter.propTypes = {
  nomeFiltrado: propTypes.string,
  cartaRara: propTypes.string,
  cartaTrunfo: propTypes.bool,
  filter: propTypes.func,
}.isRequired;
export default Filter;
