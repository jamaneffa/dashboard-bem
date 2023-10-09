import { useState, useEffect } from 'react';

function TopData() {
  //accedemos al endpoint de usuarios
  const [usersData, setUsersData] = useState({ count: 0, users: [] });

  useEffect(() => {
    fetch('http://localhost:3030/api/users')
    //fetch('https://bem-cvku.onrender.com/api/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUsersData(data);
      })
      .catch((error) => {
        console.error('Error al cargar los usuarios:', error);
      });
  }, []);


  //accedemos al endpoint de productos
  const [productsData, setProductsData] = useState({ count: 0, countByCategory: 0, products: [] });

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

  //accedemos al endpoint de categorias
  const [countCategories, setCount] = useState(0); // Estado para almacenar el valor de count

  useEffect(() => {
    fetch('http://localhost:3030/api/products/categories')
    //fetch('https://bem-cvku.onrender.com/api/products/categories')
      .then(response => response.json())
      .then(data => {
        // Extraer el valor de count de la respuesta
        const countValue = data.count;
        setCount(countValue); // Actualizar el estado con el valor de count
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
      });
  }, []); // El array vacío como segundo argumento asegura que esta función se ejecute solo una vez al montar el component
  return (
      <div className="row">
      {/* Users in DB */}
      <div className="col-md-4 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                  Total de Usuarios
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{usersData.count}</div>
              </div>
              <div className="col-auto">
                <i className="fas fa-user-check fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Products in DB */}
      <div className="col-md-4 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Total de Productos
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{productsData.count}</div>
              </div>
              <div className="col-auto">
                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Categories in DB */}
      <div className="col-md-4 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                  Total De Categorias
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{countCategories}</div>
              </div>
              <div className="col-auto">
                <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
   
export default TopData;
   