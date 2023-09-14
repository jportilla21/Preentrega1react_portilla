import React from 'react';
import CartWidget from './CartWidget';
import Logo from '../Logo Valle.png'; 

function NavBar() {

    const linkStyle = {
        fontWeight: 'bold',  
    };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-orange">
      <a className="navbar-brand" href="#">
        <img src={Logo} alt="Logo de la empresa" width="120" height="100" /> 
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a style={linkStyle} className="nav-link" href="#"> Líneas para Vacas</a>
          </li>
          <li className="nav-item">
            <a style={linkStyle} className="nav-link" href="#">Líneas para Ovejas</a>
          </li>
          <li className="nav-item">
            <a style={linkStyle} className="nav-link" href="#">Líneas para Cerdos</a>
          </li>
        </ul>
      </div>
      <CartWidget itemCount={3} />
    </nav>
  );
}

export default NavBar;
