import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigateTo = useNavigate();
  return (
    <div>
      <h1>this is my Home Page</h1>
      <button type="button" onClick={() => navigateTo('/contact')}>
        Contact
      </button>
    </div>
  );
}

export default Home;
