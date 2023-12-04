import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const navigateTo = () => {
    const name = 'priyanshu';
    if (name === 'priyanshu') {
      navigate('/contact');
    } else {
      navigate('/about');
    }
  };
  return (
    <div>
      <h1>this is my Home Page</h1>
      <button type="button" onClick={navigateTo}>
        contact
      </button>
    </div>
  );
}

export default Home;
