import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import Product from './components/Product';
import Jeans from './components/Jeans';
import Shirt from './components/Shirt';
import ShirtPattern from './components/ShirtPattern';
import ShirtDesign from './components/ShirtDesign';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />}>
            <Route path="jeans" element={<Jeans />} />
            <Route path="shirts" element={<Shirt />}>
              <Route path="pattern" element={<ShirtPattern />}>
                <Route path="design" element={<ShirtDesign />} />
              </Route>
            </Route>
            <Route index element={<Shirt />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
