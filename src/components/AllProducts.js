import { useState, useEffect } from 'react';

function AllProducts() {
  // Accedemos al endpoint de productos
  const [listProductsData, setListProductsData] = useState({ count: 0, countByCategory: 0, product: [] });

  useEffect(() => {
    fetch('http://localhost:3030/api/products')
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
  }, []);
   // El array vacío como segundo argumento asegura que esta función se ejecute solo una vez al montar el componente
   
   const cellStyle = { width: '25%', textAlign: 'center' }
   const tableStyle = { width: '80%', margin: 'auto'}
   const titleStyle = { textAlign: 'center', marginBottom: '2%' };

   return (
     <div>
      <h1 style={titleStyle}>Lista de Productos</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={cellStyle}>Nombre</th>
            <th style={cellStyle}>Precio</th>
            <th style={cellStyle}>Stock</th>
            <th style={cellStyle}>Descuento</th>
          </tr>
        </thead>
        <tbody>
          {listProductsData.products ? (
            listProductsData.products.map(product => (
              <tr key={product.sku}>
                <td style={cellStyle}>{product.name}</td>
                <td style={cellStyle}>${product.price}</td>
                <td style={cellStyle}>{product.stock === 0 ? "Sin Stock" : product.stock}</td>
                <td style={cellStyle}>{product.discount === 0 ? "No tiene descuento" : product.discount + " %"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: 'center' }}>Cargando productos...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AllProducts;