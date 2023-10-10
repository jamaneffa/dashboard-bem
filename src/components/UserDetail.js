import { useState, useEffect } from 'react';

function UserDetail() {
  //accedemos al endpoint de last product
  const [userDetailData, setUserDetailData] = useState({user: [], avatar:''});

  useEffect(() => {

    fetch('http://localhost:3030/api/users/1')
    //fetch('https://bem-cvku.onrender.com/api/users/1')
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
    }, []);

    if (userDetailData === undefined) {
      return <p>Cargando</p>;
    }

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Informacion de Usuario</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={userDetailData.avatar} alt="user"/>
                    </div>
                    <h3>Nombre Completo: {userDetailData.user.name}</h3>
                    <p>Correo Electronico:{userDetailData.user.email}</p>
                    <h5>Direccion: {userDetailData.user.address}</h5>
                    {/* <h5>Stock Disponible: {userDetailData.user.stock}</h5>
                    <h5>Descuento: {userDetailData.user.discount} %</h5>   */}
                </div>
            </div>
        </div>
    );
   }
   
export default UserDetail;