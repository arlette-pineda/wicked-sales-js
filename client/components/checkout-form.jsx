import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
  }

  render() {
    return (
      <div className="container">
        <h3 className="mb-4">My Cart</h3>
        <small className="text-muted">Order Total: $XX.xx</small>
        <form>
          <div className="input-group-lg mb-3">
            <label className="d-block mt-4" htmlFor="customerName">Name</label>
            <input
              // onChange={}
              className="form-control"
              type="text"
              id="customerName"
              required />
          </div>
          <div className="input-group-lg mb-3">
            <label className="d-block" htmlFor="creditCard">Credit Card</label>
            <input
              // onChange={}
              className="form-control"
              type="text"
              id="creditCard"
              required />
          </div>
          <div className="input-group-lg">
            <label className="d-block" htmlFor="shippingAddress">Shipping Address</label>
            <textarea
              // onChange={}
              className="form-control"
              id="shippingAddress"
              required >
            </textarea>
          </div>
          <div className="row mt-5 ml-2 mr-2 d-flex justify-content-between">
            <small className="text-muted"> &lt; Continue Shopping</small>
            <button type="submit" className="btn btn-primary">Place Order</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;