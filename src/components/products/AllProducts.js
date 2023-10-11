import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../main/Sidebar';
import Heading from '../main/Heading';
import TopData from '../main/TopData';
import Footer from '../main/Footer';

function AllProducts() {
  // Accedemos al endpoint de productos
  const [listProductsData, setListProductsData] = useState({ count: 0, countByCategory: 0, product: [] });

  useEffect(() => {
    fetch('http://localhost:3030/api/products')
    //fetch('https://bem-cvku.onrender.com/api/products')
      .then(response => response.json())
      .then(data => {
        // Actualizar el estado con los nuevos datos
        setListProductsData({
          count: data.count,
          countByCategory: data.countByCategory,
          products: data.product
        });
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
      });
  });
   
  const cellStyle = { width: '15%', textAlign: 'center' }
  const tableStyle = { width: '100%', margin: 'auto'}
  const titleStyle = { textAlign: 'center', marginBottom: '2%' };
  const loadingTableStyle = { textAlign: 'center'}

  return (
    <div id="wrapper">
      <Sidebar></Sidebar>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <Heading />
            <TopData />
            <h3 style={titleStyle}>Listado de Productos</h3>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={cellStyle}>Sku</th>
                  <th style={cellStyle}>Nombre</th>
                  <th style={cellStyle}>Precio</th>
                  {/* <th style={cellStyle}>Stock</th>
                  <th style={cellStyle}>Descuento</th> */}
                </tr>
              </thead>
              <tbody>
                {listProductsData.products ? (
                  listProductsData.products.map(product => (
                    // Agregar codigo para qe cualquier celda sea linkeable al detalle de producto
                    <tr key={product.sku}>
                      <td style={cellStyle}><Link to={`/product/${product.sku}`}>{product.sku}</Link></td>
                      <td style={cellStyle}><Link to={`/product/${product.sku}`}>{product.name}</Link></td> 
                      <td style={cellStyle}><Link to={`/product/${product.sku}`}>${product.price}</Link></td>
                      {/* <td style={cellStyle}>{product.stock === 0 ? "Sin Stock" : product.stock}</td>
                      <td style={cellStyle}>{product.discount === 0 ? "No tiene descuento" : product.discount + " %"}</td> */}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" style={loadingTableStyle}>Cargando productos...</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
            <Footer />
      </div>
    </div>
  );
}

export default AllProducts;