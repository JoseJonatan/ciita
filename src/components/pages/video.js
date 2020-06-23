import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import videoOne from '../../video/video-1.mp4';
import previewOne from '../../images/home-video/image-1.jpg';
import previewTwo from '../../images/home-video/image-2.jpg';
import previewThree from '../../images/home-video/image-3.jpg';

export default class Video extends Component {
    render() {
        return (
            <section id="homevideo" className="section section-homevideo blue-grey lighten-4 scrollspy">
                  <div className="container">
                       <div className="row">
                            <h4 className="center">
                                <span className="pink-dark darken-4">Proyectos</span> colaborativos
                            </h4>
                            <div className="col s12 m4">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={previewOne} alt="ProyectOne" />
                                            <Link to="" className="btn-floating activator halfway-fab waves-effect 
                                            waves-light blue darken-4">
                                            <i className="material-icons">play_circle_filled</i></Link>
                                    </div>
                                    <div className="card-content">
                                        <p><strong>Careta Protectora</strong></p>
                                        <p>Careta facial protectora contra Covid-19 en colaboracion con el IPN.</p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-daken 4">Careta
                                        <i className="material-icons right">close</i></span>
                                        <div className="video-container">
                                            <iFrame width="1000" height="480" src={ videoOne } 
                                            frameBorder="0" allowFullScreen=""></iFrame>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m4">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={previewTwo} alt="ProyectOne" />
                                            <Link to="" className="btn-floating activator halfway-fab waves-effect 
                                            waves-light blue darken-4">
                                            <i className="material-icons">play_circle_filled</i></Link>
                                    </div>
                                    <div className="card-content">
                                    <p><strong>SAW</strong></p>
                                        <p> Surface Acoustic Wave - Sensor de onda acústica superficial</p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-daken 4">SAW
                                        <i className="material-icons right">close</i></span>
                                        <p>Los sensores de onda acústica superficial, Surface Acoustic Wave, 
                                            SAW. Son dispositivos útiles para hacer mediciones en entornos de 
                                            líquidos y gases. Aportando una gran variedad de alternativas de 
                                            integración. El funcionamiento de los sensores SAW están basados 
                                            en una onda que se propaga sobre una superficie piezoeléctrica 
                                            generada por un par de interdigitados estimulados eléctricamente.</p>
                                        <p>Actualmente este tipo de sensores son trabajados en colaboración con
                                             el Centro de Investigación en Computación.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m4">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={previewThree} alt="ProyectOne" />
                                            <Link to="" className="btn-floating activator halfway-fab waves-effect 
                                            waves-light blue darken-4">
                                            <i className="material-icons">play_circle_filled</i></Link>
                                    </div>
                                    <div className="card-content">
                                        <p><strong>IPNegocios</strong></p>
                                        <p>Red social enfocada en conectar a la comunidad empresarial </p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-daken 4">IPNegocios
                                        <i className="material-icons right">close</i></span>
                                        <p>Una plataforma social, comunicación y desarrollo entre estudiantes 
                                            egresados del IPN con el sector empresarial, utilizando lenguajes 
                                            de desarrollo en Javascript y Java.</p>
                                    </div>
                                </div>
                            </div>
                       </div>
                  </div>              
            </section>
        )
    }
}