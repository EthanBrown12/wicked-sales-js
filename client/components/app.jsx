import React from 'react';
import Header from './header';
import ProductList from './product-list';

export default class App extends React.Component {

  componentDidMount() {
    fetch('/api/health-check');

  }

  render() {
    return (
      <div className="container">
        <Header />
        <ProductList />
      </div>
    );
  }
}
