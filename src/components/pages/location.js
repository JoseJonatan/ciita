/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from 'react'

import '../../../node_modules/materialize-css/dist/css/materialize.min.css';

export default class Location extends Component {
    render() {
        return (
            <section id="contact" className="section section-contact scrollspy">
                <div className="container">
                    <div className="row">
                        <h4 className="center">
                            <span className="black-text">Medios de contacto</span>
                        </h4>
                        <div className="col s12 m6">
                            <div className="card-panel blue-grey lighten-2 white-text center">
                                <i className="material-icons">email</i>
                                <h5>Email CIITA</h5>
                                <p>Tienes dudas sobre como desarrollar algun proyecto tecnológico o 
                                buscas capacitación especializada, envianos un correo al:</p>
                                <p><strong>correociita@ipn.mx</strong></p>
                            </div>
                            <ul className="collection with-header">
                                        <li className="collection-header">
                                            <h5>Dirección</h5>
                                        </li>
                                        <li className="collection-item"><i className="fas fa-map-marker-alt">
                                          Av. Vicente Guerrero S/N, Col. Ex-Hipódromo, Ciudad Juárez Chihuahua.</i></li>
                                        <li className="collection-item"><i className="fas fa-phone"> (614) 430 13 64</i></li>
                            </ul>
                        </div>
                        <div className="col s9 m6">
                            <div className="container map">
                                <h5>Ubicación</h5>
                            <iFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14381.56507269195!2d-106.47071117169178!3d31.726887937331135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e759350c5fd14b%3A0x7ad60e44e7850d91!2sEx%20Hip%C3%B3dromo%2C%2032330%20Cd%20Ju%C3%A1rez%2C%20Chih.!5e0!3m2!1ses-419!2smx!4v1591382343128!5m2!1ses-419!2smx" 
                            width="150%" height="400" frameBorder="0" allowFullScreen="" ></iFrame>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}