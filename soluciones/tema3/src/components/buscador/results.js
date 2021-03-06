import React from 'react';
import ResultsItem from './results_item';

const Results = React.createClass({
  propTypes: {
    results: React.PropTypes.array
  },
  getDefaultProps() {
    return {
      results: []
    };
  },
  render(){
    const items = this.props.results.map(r => {
      return <ResultsItem key={r.name} {...r} />
    });

    return (
      <div className="search-results">
        <table>
          <thead>
            <tr>
              <th>Personaje</th>
              <th>Actor</th>
              <th className="center">Temporadas</th>
              <th className="center">Vivo</th>
            </tr>
          </thead>
          <tbody>
            { items }
          </tbody>
        </table>
        <div className="search-results-summary">
          <div className="row">
            Encontrados <span className="search-results-total">{ this.props.results.length }</span> personajes
          </div>
        </div>
    </div>
    )
  }
});

export default Results;