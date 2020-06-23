import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Imgone from '../../images/slider-home/slide-1.jpg';
import Imgtwo from '../../images/slider-home/slide-2.jpg';
import Imgthree from '../../images/slider-home/slide-3.jpg';

import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import '../styles/banner.css';

export default class Banner extends Component {
    render() {
        return (
            <section className="slider" id="home">
            <ul className="slides">
                <li>
                    <img src={Imgone} alt="Home-S1" />
                    <div className="caption right-align black-text">
                        <h2>Innovación y desarrollo para tu empresa</h2>
                        <h5 className="black-text hide-on-small-only">
                        Soluciones integrales de vanguardia en proyectos tecnológicos para los sectores 
                        productivos y de servicios de Chihuahua.  
                        </h5>
                        <Link to="/met" className="btn btn-large light-blue darken-4">Conocenos</Link>
                    </div>
                </li>
                <li>
                    <img src={Imgtwo} alt="Home-S2" />
                    <div className="caption right-align black-text">
                        <h2>Proyectos tecnológicos consolidados</h2>
                        <h5 className="light blue-text text-darken-4 hide-on-small-only">
                        Creamos un ecosistema de innovación para responder a las necesidades economicas,
                        politicas y sociales que demanda la región y el país.  
                        </h5>
                        <Link to="/net" className="btn btn-large light-blue darken-4">Conocer Más</Link>
                    </div>
                </li>
                <li>
                    <img src={Imgthree} alt="Home-S4" />
                    <div className="caption left-align black-text">
                        <h2>Avisos</h2>
                        <h5 className="light blue-text text-darken-4">
                            ...  
                        </h5>
                        <Link to="#" className="btn btn-large light-blue darken-4">Conocer Más</Link>
                    </div>
                </li>
            </ul>
        </section>
        )
    }
}