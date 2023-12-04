import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Product() {
  return (
    <div>
      <nav>
        <Link to="jeans">Jeans</Link>
        <Link to="shirts">Shirts</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Product;
