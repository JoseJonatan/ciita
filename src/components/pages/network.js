import React, { Component } from 'react'
import Render from '../../images/desarrollo/ciita.jpg'

export default class Network extends Component {
    render() {
        return (
            <section className="Desarrollo" id="proy">

            <div className="container">
            <div className="col s12 m12">
              <div className="card">
                <div className="card-image">
                  <img className="responsive-img" src={Render} alt="Render" />
                  <span className="card-title hide-on-small-only">Innovación e integración tecnológica de alto nivel</span>
                </div>
              </div>
            </div>
            </div>

            <div className="container">
                <div className="row">
                    <h4 className="center">
                        <span className="white-text">Desarrollo empresarial</span>
                    </h4>

                    <div className="col s12 m6">
                            <div className="card-panel blue-grey lighten-1 white-text center">
                                <i className="material-icons">stars</i>
                                <h5>Capacitación Estrategica</h5>
                                <div className="col s12 m6"></div>
                                <p>No se puede hablar de un sólo modelo  de capacitación estratégico que 
                                    sea aplicable y exitoso para todas las empresas, ya que es necesario 
                                    elaborar un modelo en particular para satistacer la necesidades de cada 
                                    empresa.</p>
                                <p><strong>Evaluamos cuáles son las oportunidades para la capacitación,
                                    los temas, recursos especificos y selección de alternativas 
                                    estratégicas para lograr los objetivos del proyecto.</strong></p>
                            </div>
                    </div>

                    <div className="col s12 m6">
                            <div className="card-panel blue-grey lighten-4 black-text center">
                                <i className="material-icons">group_work</i>
                                <h5>Proyectos Vinculados</h5>
                                <p>Son las actividades de investigación aplicada y desarrollo tecnológico 
                                    que contribuyan a la solución de problemas nacionales o extranjeros, 
                                    a la atención de proyectos estratégicos y/o prioritarios y al 
                                    establecimiento de mecanismos para fomentar la relación del 
                                    Instituto con los sectores productivos. </p>
                                <p><strong>- Desde prestación de servicios, realización de proyectos de 
                                    investigación, estudios técnicos, asesorías, normalización y 
                                    certificación de calidad. 
                                    </strong></p>
                            </div>
                    </div>

                    <div className="col s12 m6">
                            <div className="card-panel blue-grey lighten-4 black-text center">
                                <i className="material-icons">mediation</i>
                                <h5>Transferencia de Tecnología</h5>
                                <p>Somos el vínculo entre la comunidad politécnica y 
                                   el sector industrial, privado, público y social con el propósito de 
                                   comercializar el conocimiento generado de la investigación a través de 
                                   licencias u otros esquemas comerciales.</p>
                            </div>
                    </div>

                    <div className="col s12 m6">
                            <div className="card-panel blue-grey lighten-1 white-text center">
                                <i className="material-icons">verified</i>
                                <h5>Aceleracion de Empresas</h5>
                                 <p>El modelo de aceleración de empresas UPDCE-F6 del Instituto Politécnico 
                                    Nacional, tienen como objetivo impulsar y detonar negocios, a través de 
                                    propuestas que generen valor al mercado, los accionistas, los empleados 
                                    y a la comunidad.</p>
                           
                            </div>
                    </div>


                </div>
            </div>
        </section>
        )
    }
}