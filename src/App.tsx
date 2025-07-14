import { Component } from 'react';
import './App.css';
import Search from './components/search/Search';
import Result from './components/result/Result';

class App extends Component {
  render() {
    return (
      <>
        <Search />
        <Result />
      </>
    );
  }
}

export default App;
