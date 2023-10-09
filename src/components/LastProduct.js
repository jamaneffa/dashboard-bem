import { useState, useEffect } from 'react';

function LastProduct() {
    //accedemos al endpoint de last product
  const [lastProductData, setLastProduct] = useState();

  useEffect(() => {

    fetch('http://localhost:3030/api/products/lastproduct')
    //fetch('https://bem-cvku.onrender.com/api/products/lastproduct')
      .then((response) => response.json())
      .then((data) => {
        setLastProduct(data.product);
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
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={lastProductData.image} alt="product"/>
                </div>
                <h3>{lastProductData.name}</h3>
                <p>{lastProductData.detail}</p>
                <h5>Precio: $ {lastProductData.price}</h5>
                <h5>Stock Disponible: {lastProductData.stock}</h5>
                <h5>Descuento: {lastProductData.discount} %</h5>  
                {/* <a target="_blank" rel="nofollow" href="/">
                    View product detail
                </a> */}
                </div>
            </div>
        </div>
    );
   }
   
export default LastProduct;