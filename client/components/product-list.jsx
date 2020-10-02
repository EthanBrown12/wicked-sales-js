import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(products => this.setState({
        products: products
      }));
  }

  render() {
    const items = this.state.products.map(product => {
      return (
        <ProductListItem
          key={product.productId}
          name={product.name}
          price={product.price}
          image={product.image}
          description={product.shortDescription}
          setView={this.props.setView}
          productId={product.productId}
          longDescription={product.longDescription}
        />

      );
    });
    return (
      <div className="container">
        <div className="card-deck">
          {items}
        </div>
      </div>
    );
  }
}
