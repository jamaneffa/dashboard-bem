import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Sidebar from '../main/Sidebar';
import TopData from '../main/TopData';
import Heading from '../main/Heading';
import Footer from '../main/Footer';

function ProductDetail() {
  const { sku } = useParams();
  //accedemos al endpoint de last product
  const [productDetailData, setProductDetailData] = useState({product: [], image:''});

  useEffect(() => {

    fetch(`http://localhost:3030/api/products/${sku}`)
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
    });

    if (productDetailData === undefined) {
      return <p>Cargando</p>;
    }

    return (
      <div id="wrapper">
      <Sidebar></Sidebar>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <Heading />
            <TopData />
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">Detalle de Producto</h6>
                  </div>
                  <div className="card-body">
                      <div className="text-center">
                          <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={productDetailData.image} alt="product"/>
                      </div>
                      <h2>{productDetailData.product.name}</h2>
                      <h6>{productDetailData.product.detail}</h6>
                      <h6>Precio: $ {productDetailData.product.price}</h6>
                      <h6>Stock Disponible: {productDetailData.product.stock}</h6>
                      <h6>Descuento: {productDetailData.product.discount} %</h6>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        </div>
      </div>
    );
   }
   
export default ProductDetail;