import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FaHouseUser } from 'react-icons/fa';

import Sidebar from '../main/Sidebar';
import Heading from '../main/Heading';
import TopData from '../main/TopData';
import Footer from '../main/Footer';


function AllUsers() {
  // usamos  endpoint de usuarios
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
   
  const titleStyle = { textAlign: 'center', marginBottom: '2%' };
  const linkStyle = { textAlign: 'left', marginBottom: '2%' };

  return (
    <div id="wrapper">
      <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid">
              <Heading />
              <TopData />
              <hr className="sidebar-divider" />
              <h3 style={titleStyle}>Listado de Usuarios</h3>
              <div className="row">
                {listUsersData.users ? (
                  listUsersData.users.map(user => (
                    <div key={user.id} className="col-md-4 mb-4">
                      <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2">                     
                              <div className="h5 mb-0 font-weight-bold text-gray-800">
                                {user.name}
                              </div><br></br>
                              <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                              <Link to={`/user/${user.id}`}>Ver informacion de usuario</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Cargando usuarios...</p>
                )}
              </div>
              <h5 style={linkStyle}><Link to={`/`}><FaHouseUser/> Ir al Inicio</Link></h5>
            </div>
          </div>
        <Footer />
      </div>
    </div>
  );
}

export default AllUsers;