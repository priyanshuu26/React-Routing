import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Shirt() {
  return (
    <div>
      <h1>welcome to shirt section</h1>
      <Link to="pattern">Shirt Patterns</Link>
      <Outlet />
    </div>
  );
}

export default Shirt;
