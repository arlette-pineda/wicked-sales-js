import React from 'react';

function Header(props) {
  const cartItemCount = props.cartItemCount.length;
  const setView = props.setView;

  return (
    <div className="container-lg p-2 px-4 d-flex header-style">
      <div className="d-inline">
        <h2 className="hover"
          onClick={() => props.setView('catalog', {})}>
            $ Wicked Sales</h2>
      </div>
      <div className="d-inline d-flex ml-auto pointer"
        onClick={() => setView('cart', {})}>
        <p className="m-2">{`${cartItemCount} items`}</p>
        <i className="fas fa-shopping-cart fa-2x hover"></i>
      </div>
    </div>
  );
}

export default Header;
