import React, { Component } from 'react'

import Consejo from '../../images/advice/consejo.png'
import ConsejoTwo from '../../images/advice/consejo-2.png'

export default class Advice extends Component {
    render() {
        return (
            <section id="advice" className="advice page-advice scrollspy">
                <div className="container">
                    <div className="row">
                        <h4 className="center">
                            <span className="black-text">Consejo de Gobierno</span>
                        </h4>
                        
                        <div className="col s12 m6">
                            <div className="caption left-align black-text">
                                <h4>La importancia de involucrar a los sectores clave de la producción 
                                    en el desarrollo económico regional</h4>
                                <h5 className="light blue-text text-darken-4">
                                    Industria de Exportación </h5>
                                <h5 className="light blue-text text-darken-4">
                                    Pequeñas y Medianas Empresas </h5>
                                <h5 className="light blue-text text-darken-4">
                                    Sector Social </h5>
                                <h5 className="light blue-text text-darken-4">
                                    Academia </h5>
                                <h5 className="light blue-text text-darken-4">
                                    Gobierno </h5>
                            </div>
                        </div>
                        <div className="col s12 m6">
                            <img src={Consejo} alt="Home-S1" className="hide-on-small-only"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}