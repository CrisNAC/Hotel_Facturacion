import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronDown } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import HTTPClient from "../api/HTTPClient.js";
import { Dropdown } from 'react-bootstrap';
import { Avatar } from '@mui/material';

export const NavBar = ({ className = "" }) => {

  const client = new HTTPClient();

  const navigate = useNavigate();

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

  const irALogin = () => {
    navigate('/');
  };

  const handleLogout = async () => {
    try {
      await client.cerrarSesion();
      irALogin();
    }
    catch (error) {
      console.log('Error al intentar hacer logout:', error);
    }
  }

	const irAPerfil = () => {
		navigate('/profile');
	}

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

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
            <Avatar {...stringAvatar('Sebatian Kisser')} /> {/* Siempre debe de recibir un NOMBRE y APELLIDO */}
            {/* <FaUser className="me-1" /> */}
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
