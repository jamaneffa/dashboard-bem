import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import AllUsers from './components/AllUsers';
import AllProducts from './components/AllProducts';
import UserDetail from './components/UserDetail';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/product/:sku" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

