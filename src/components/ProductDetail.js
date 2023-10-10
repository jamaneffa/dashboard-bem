import { useState, useEffect } from 'react';

function ProductDetail() {
  //accedemos al endpoint de last product
  const [productDetailData, setProductDetailData] = useState({product: [], image:''});

  useEffect(() => {

    fetch('http://localhost:3030/api/products/4')
    //fetch('https://bem-cvku.onrender.com/api/products/4')
      .then((response) => response.json())
      .then((data) => {
        setProductDetailData({
            product : data.product,
            image: data.image
        });
      })
      .catch((error) => {
        console.error('Error al obtener el detalle de producto:', error);
      });
    }, []);

    if (productDetailData === undefined) {
      return <p>Cargando</p>;
    }

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Detalle de Producto</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={productDetailData.image} alt="product"/>
                    </div>
                    <h3>{productDetailData.product.name}</h3>
                    <p>{productDetailData.product.detail}</p>
                    <h5>Precio: $ {productDetailData.product.price}</h5>
                    <h5>Stock Disponible: {productDetailData.product.stock}</h5>
                    <h5>Descuento: {productDetailData.product.discount} %</h5>  
                </div>
            </div>
        </div>
    );
   }
   
export default ProductDetail;