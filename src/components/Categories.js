import { useState, useEffect } from 'react';

function Categories() {
  //accedemos al endpoint de productos
  const [countCategoryData, setProductsData] = useState({ countByCategory: 0});

  useEffect(() => {
    fetch('http://localhost:3030/api/products')
    //fetch('https://bem-cvku.onrender.com/api/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProductsData(data);
      })
      .catch((error) => {
        console.error('Error al cargar los productos:', error);
      });
  }, []);

    return (
        <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Cantidad de Productos por Categoria</h6>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                          <div className="card-body">Ambos : {countCategoryData.countByCategory.ambos}</div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                          <div className="card-body">Camisas : {countCategoryData.countByCategory.camisas}</div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                          <div className="card-body">Corbatas : {countCategoryData.countByCategory.corbatas}</div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                          <div className="card-body">Pantalones : {countCategoryData.countByCategory.pantalones}</div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                          <div className="card-body">Sacos : {countCategoryData.countByCategory.sacos}</div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                          <div className="card-body">Zapatos : {countCategoryData.countByCategory.zapatos}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    )
   }
   
export default Categories;