import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Sidebar from '../main/Sidebar';
import TopData from '../main/TopData';
import Heading from '../main/Heading';
import Footer from '../main/Footer';

function UserDetail() {
  const { id } = useParams();
  //usamos endpoint de detalle de usuario
  const [userDetailData, setUserDetailData] = useState({user: [], avatar:''});

  useEffect(() => {

    fetch(`http://localhost:3030/api/users/${id}`)
    //fetch(`https://bem-cvku.onrender.com/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUserDetailData({
            user : data.user,
            avatar: data.avatar
        });
      })
      .catch((error) => {
        console.error('Error al obtener el detalle de usuario:', error);
      });
    });

    if (userDetailData === undefined) {
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
              <hr className="sidebar-divider" />
              <br></br>
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Informacion de Usuario</h6>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={userDetailData.avatar} alt="user"/>
                        </div>
                        <h2>{userDetailData.user.name}</h2>
                        <h6>Correo Electronico: {userDetailData.user.email}</h6>
                        <h6>Direccion: {userDetailData.user.address}</h6>
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
   
export default UserDetail;