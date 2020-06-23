import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../node_modules/materialize-css/dist/css/materialize.css';
import Logo from '../../images/icons/logo-cita.png';

const SmoothScroll = () =>{
    return(
        <section>
            <div className="navbar-fixed">
                <nav className="light-blue darken-4">
                    <div className="container">
                        <div className="nav-wrapper">
                            <Link to="/hom" className="brand-logo" ><img src={Logo} alt="Logo" width="70" height="50"/></Link>
                            <Link to="!#" data-target="mobile-demo" className="sidenav-trigger">
                                <i className="material-icons">menu</i></Link>
                            <ul className="right hide-on-med-and-down">
                                <li><Link to="/hom">Inicio</Link></li>
                                <li><Link to="/met">Conocenos</Link></li>
                                <li><Link to="/net">Desarrollo Empresarial</Link></li>
                                <li><Link to="">Oferta Educativa</Link></li>
                                <li><Link to="/lab">Laboratorios</Link></li>
                                <li><Link to="/ad">Consejo de Gobierno</Link></li>
                                <li><Link to="/log">CIITA</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <ul className="sidenav" id="mobile-demo">
            <li><Link to="">Inicio</Link></li>
            <li><Link to="">Conocenos</Link></li>
            <li><Link to="">Desarrollo Empresarial</Link></li>
            <li><Link to="">Oferta Educativa</Link></li>
            <li><Link to="">Laboratorios</Link></li>
            <li><Link to="">Consejo de Gobierno</Link></li>
            <li><Link to="">CIITA</Link></li>
            </ul>
        </section>
    )
}

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <SmoothScroll />
            </div>
        )
    }
}