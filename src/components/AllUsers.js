import '../App.css';
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

function AllUsers() {
  // Accedemos al endpoint de usuarios
  const [listUsersData, setListUsersData] = useState({ count: 0, users: [] });

  useEffect(() => {
    fetch('http://localhost:3030/api/users')
    //fetch('https://bem-cvku.onrender.com/api/users')
      .then(response => response.json())
      .then(data => {
        // Actualizar el estado con los nuevos datos
        setListUsersData({
          count: data.count,
          users: data.users
        });
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
      });
  }, []);
   // El array vacío como segundo argumento asegura que esta función se ejecute solo una vez al montar el componente
   
   const cellStyle = { width: '15%', textAlign: 'center' }
   const tableStyle = { width: '100%', margin: 'auto'}
   const titleStyle = { textAlign: 'center', marginBottom: '2%' };
   const loadingTableStyle = { textAlign: 'center'}

   return (
    <div id="wrapper">
      <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            {/* <div className="container-fluid"></div> */}
            <h3 style={titleStyle}>Listado de Usuarios</h3>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={cellStyle}>Id</th>
                  <th style={cellStyle}>Nombre Completo</th>
                  <th style={cellStyle}>Email</th>
                  {/* <th style={cellStyle}>Direccion</th> */}
                </tr>
              </thead>
              <tbody>
                {listUsersData.users ? (
                  listUsersData.users.map(user => (
                      // Agregar codigo para qe cualquier celda sea linkeable al detalle de usuario
                    <tr key={user.id}>
                      <td style={cellStyle}>{user.id}</td>
                      <td style={cellStyle}>{user.name}</td>
                      <td style={cellStyle}>{user.email}</td>
                      {/* <td style={cellStyle}>{user.address}</td> */}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" style={loadingTableStyle}>Cargando usuarios...</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
}

export default AllUsers;