import { Component } from 'react';

import './Search.css';

class Search extends Component {
  render() {
    return (
      <>
        <div className="search__container">
          <input className="search__input" type="text" placeholder={'Search'} />
          <button className="search__button" type="button">
            Search
          </button>
        </div>
      </>
    );
  }
}

export default Search;
