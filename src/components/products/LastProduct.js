import { useState, useEffect } from 'react';

function LastProduct() {
  //usamos endpoint de last product
  const [lastProductData, setLastProductData] = useState({product: []});

  useEffect(() => {

    fetch('http://localhost:3030/api/products/lastproduct')
    //fetch('https://bem-cvku.onrender.com/api/products/lastproduct')
      .then((response) => response.json())
      .then((data) => {
        setLastProductData({product : data.product});
      })
      .catch((error) => {
        console.error('Error al obtener el último producto:', error);
      });
    }, []);

    if (lastProductData === undefined) {
      return <p>Cargando</p>;
    }

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Ultimo Producto Agregado en la Base de Datos</h6>
                </div>
                <div className="card-body">
                  <div className="text-center">
                      <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={lastProductData.product.image} alt="product"/>
                  </div>
                  <h3>{lastProductData.product.name}</h3>
                  <p>{lastProductData.product.detail}</p>
                  <h5>Precio: $ {lastProductData.product.price}</h5>
                  <h5>Stock Disponible: {lastProductData.product.stock}</h5>
                  <h5>Descuento: {lastProductData.product.discount} %</h5>  
              </div>
            </div>
        </div>
    );
   }
   
export default LastProduct;