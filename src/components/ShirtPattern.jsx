import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function ShirtPattern() {
  return (
    <div>
      <h2>Patterns:</h2>
      <Link to="design">Checks</Link>
      <Link to="design">Strips</Link>
      <Link to="design">Plain</Link>
      <Outlet />
    </div>
  );
}

export default ShirtPattern;
