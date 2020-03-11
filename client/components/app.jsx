import React from 'react';
// import Header from './header';
// import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true
    };
  }

  render() {
    return (
      <div>
        {/* <Header />,
        <ProductList /> */}
        <ProductDetails />
      </div>
    );
  }
}
