// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import { Avatar } from '@mui/material';
import { FaChevronDown } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Dropdown } from 'react-bootstrap';
// Components
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
// Axios
import HTTPClient from "../api/HTTPClient.js";

export const NavBar = ({ className = "" }) => {
  /*** Estados ***/
  const client = new HTTPClient();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [admi, setAdmi] = useState({
    nickname: '',
    name: '',
    lastName: ''
  });

  /*** Funciones para la navegacion ***/
  const irALogin = () => {
    navigate('/');
  };

  const irAInicio = () => {
    navigate('/Inicio');
  };

  const irAHuespedes = () => {
    navigate('/Huespedes');
  };

  const irAIngresoHuesped = () => {
    navigate('/IngresoHuesped');
  };

  const irAFacturasEmitidas = () => {
    navigate('/FacturasEmitidas');
  };

  const irAReportes = () => {
    navigate('/Reportes');
  };

  const irAPerfil = () => {
    navigate('/profile');
  }


  /*** Funciones que tocan la base de datos ***/

  /**
  * Redirige al login y cierra la sesión.
  */
  const handleLogout = async () => {
    try {
      setLoading(true);
      await client.cerrarSesion();
      irALogin();
    }
    catch (error) {
      setError(error.message);
      console.log('Error al intentar hacer logout:', error);
    } finally {
      setLoading(false);
    }
  }

  /**
  * Obtiene los datos del usuario autenticado desde la API.
  */
  const getUser = async () => {
    try {
      setLoading(true);
      const response = await client.getUser();
      const user = response.data.user;

      setAdmi({
        nickname: user.nombre_usuario,
        name: user.nombre,
        lastName: user.apellido
      });
    }
    catch (error) {
      setError(error.message);
      console.log('Error al intentar obtener el usuario:', error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Utilizado para traer el usuario
   */
  useEffect(() => {
    getUser();
  }, []);

  /*** Funciones para la eleccion de color del Perfil ***/
  function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <>
      {/* NavBar */}
      <div
        className={`nav-bar fixed-top w-100 d-flex align-items-center py-2 px-4 mb-1 ${className}`}
        style={{ backgroundColor: "#83A3A8", height: "50px" }}
      >
        {/* Logo */}
        <div className="d-flex align-items-center text-white fw-bold fs-4" onClick={irAInicio}>
          <FaSlack size={32} className="me-2" /> JAZEL
        </div>

        {/* Acciones de navegación */}
        <div className="d-flex gap-4 mx-auto">
          <button className="btn btn-link text-white fw-normal text-decoration-none" onClick={irAInicio}>Inicio</button>
          <button className="btn btn-link text-white fw-normal text-decoration-none" onClick={irAHuespedes}>Huespedes</button>
          <button className="btn btn-link text-white fw-normal text-decoration-none" onClick={irAIngresoHuesped}>Ingreso de huésped</button>
          <button className="btn btn-link text-white fw-normal text-decoration-none" onClick={irAFacturasEmitidas}>Facturas emitidas</button>
          <button className="btn btn-link text-white fw-normal text-decoration-none" onClick={irAReportes}>Reportes</button>
        </div >

        {/* Auth section */}
        <Dropdown className='mx-2' align="end">
          <Dropdown.Toggle variant="link" className="text-white d-flex align-items-center p-0 border-0">
            {/* Siempre debe de recibir un NOMBRE y APELLIDO */}
            {
              error ? (<span>ErrorAuth</span>)
                : loading ? (<FaUser className="me-1" />)
                  : (<Avatar {...stringAvatar(`${admi.name} ${admi.lastName}`)} />)
            }
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={irAPerfil}>Perfil</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>

        </Dropdown>
      </div >

      {/* Contenido debajo del NavBar */}
      < div style={{ marginTop: "50px" }}>
      </div >
    </>
  );
};

export default NavBar;
