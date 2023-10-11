import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../main/Sidebar';
import Heading from '../main/Heading';
import TopData from '../main/TopData';
import Footer from '../main/Footer';


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
              <h3 style={titleStyle}>Listado de Usuarios</h3>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={cellStyle}>Id</th>
                    <th style={cellStyle}>Nombre Completo</th>
                    <th style={cellStyle}>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {listUsersData.users ? (
                    listUsersData.users.map(user => (
                        // Agregar codigo para qe cualquier celda sea linkeable al detalle de usuario
                      <tr key={user.id}>
                        <td style={cellStyle}><Link to={`/user/${user.id}`}>{user.id}</Link></td>
                        <td style={cellStyle}><Link to={`/user/${user.id}`}>{user.name}</Link></td>
                        <td style={cellStyle}><Link to={`/user/${user.id}`}>{user.email}</Link></td>
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
          <Footer />
        </div>
    </div>
  );
}

export default AllUsers;