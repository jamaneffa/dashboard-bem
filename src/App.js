import './assets/styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './components/main/Dashboard';
import AllUsers from './components/users/AllUsers';
import AllProducts from './components/products/AllProducts';
import UserDetail from './components/users/UserDetail';
import ProductDetail from './components/products/ProductDetail';

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

