import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.getProducts();
    window.scrollTo(0, 0);
  }

  getProducts() {
    fetch('/api/products')
      .then(response => response.json())
      .then(products => this.setState({
        products: products
      }))
      .catch(error => console.error(
        'error:', error.message
      ));
  }

  render() {
    return (
      <div className="container mt-3 mb-4 pt-2">
        <div className="row d-flex justify-content-between">
          {this.state.products.map((productPa, index) => {
            return (<ProductListItem key={index} product={productPa}
              setView={this.props.setView}
            />);
          })}
        </div>
      </div>
    );
  }
}

export default ProductList;
