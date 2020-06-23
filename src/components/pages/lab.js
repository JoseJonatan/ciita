import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import LabInt from '../../images/lab/labint.jpg';
import LabComp from '../../images/lab/labcom.jpg';
import LabMaq from '../../images/lab/labmaq.jpg';
import LabMet from '../../images/lab/labmet.jpg';
import LabMat from '../../images/lab/labmat.jpg';
import LabMan from '../../images/lab/labman.jpg';
import LabElec from '../../images/lab/labelec.jpg';
import LabEma from '../../images/lab/labema.jpg';


export default class Lab extends Component {
    render() {
        return (
            <Fragment>
            <section id="laboratoty" className="section page-laboratory blue-grey lighten-5 scrollspy">
                  <div className="container">
                       <div class="row">
                            <h4 className="center">
                                <span className="black-text">Laboratorios</span>
                            </h4>
                            <div className="col s12 m4">
                                <div className="card">
                                <div className="card-image">
                                        <img src={LabInt} alt="LabOne" />
                                            <Link to="" className="btn-floating activator halfway-fab waves-effect 
                                            waves-light blue darken-4">
                                            <i className="material-icons">add</i></Link>
                                    </div>
                                    <div className="card-content">
                                        <p><strong>Laboratorio de Inteligencia Artificial</strong></p>
                                        <p>Las herramentas de software y hardware que más se utilizan en el ambito
                                            profesional en inteligencía artificial.</p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-daken 4">Laboratorio de Pruebas EMC
                                        <i className="material-icons right">close</i></span>
                                        <p>El Laboratorio de Inteligencia Artificial ( Integración i4.0) 
                                            del CIITA (Centro de Innovación e Integración de Tecnologías 
                                            Avanzadas) en Cd Juárez, tiene como objetivo asistir al sector 
                                            industrial, gubernamental y académico en el aprendizaje del 
                                            complejo campo del la inteligencia artificial.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={LabComp} alt="LabOne" />
                                            <Link to="" className="btn-floating activator halfway-fab waves-effect 
                                            waves-light blue darken-4">
                                            <i className="material-icons">add</i></Link>
                                    </div>
                                    <div className="card-content">
                                        <p><strong>Laboratorio de Computo Avanzado</strong></p>
                                        <p>Computadoras con un alto nivel de prestaciones para desarrollar 
                                            computacion web, sistemas moviles, basados en open source o con 
                                            licencia.</p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-daken 4">Laboratorio de Pruebas EMC
                                        <i className="material-icons right">close</i></span>
                                        <p>El Laboratorio de Computo Avanzado del CIITA 
                                            (Centro de Innovación e Integración de Tecnologías Avanzadas) 
                                            en Cd Juárez, ofrece servicios de computo avanzado un entorno 
                                            propicio para las clases de laboratorio, capacitación
                                            y proyectos de programación avanzada</p>
                                    </div>
                                </div>
                            </div> 

                            <div className="col s12 m4">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={LabMaq} alt="LabOne" />
                                            <Link to="" className="btn-floating activator halfway-fab waves-effect 
                                            waves-light blue darken-4">
                                            <i className="material-icons">add</i></Link>
                                    </div>
                                    <div className="card-content">
                                        <p><strong>Laboratorio de Maquinados Avanzados</strong></p>
                                        <p>Nuestro enfoque innovador para la fabricación con precisión 
                                            ofrece soluciones rentables para cumplir con especificaciones 
                                            de alta calidad y precisión.</p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-daken 4">Laboratorio de Maquinados Avanzados
                                        <i className="material-icons right">close</i></span>
                                        <p>Tiene como  objetivo principal el fortalecimiento 
                                            de la pequeña y mediana industria con la implementación y 
                                            ejecución de capacitación altamente especializada para el área 
                                            de moldes y troqueles; además, de proveer servicios de 
                                            manufactura avanzada y proponer proyectos que impulsen el 
                                            desarrollo e innovación tecnológica. Ofrece servicios de 
                                            mecanizado de alta precisión para tareas que requieren 
                                            componentes complejos y difíciles de mecanizar.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={LabElec} alt="ProyectOne" />
                                            <Link to="" className="btn-floating activator halfway-fab waves-effect 
                                            waves-light blue darken-4">
                                            <i className="material-icons">add</i></Link>
                                    </div>
                                    <div className="card-content">
                                        <p><strong>Laboratorio de Prototipos Electrónicos</strong></p>
                                        <p>Labotatorio a escala que ofrece servicios de fabricación de 
                                            prototipos electrónicos y electrónica de grado industrial.</p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-daken 4">Laboratorio de Pruebas EMC
                                        <i className="material-icons right">close</i></span>
                                        <p>El Laboratorio de Prototipos Electrónicos del CIITA 
                                            (Centro de Innovación e Integración de Tecnologías Avanzadas) 
                                            en Cd Juárez es un taller a pequeña escala que ofrece servicios 
                                            de fabricación de prototipos electrónicos. 
                                            Se compone de herramientas estándar de fabricación y electrónica 
                                            de grado industrial.
                                            En electrónica, la creación de prototipos significa construir 
                                            un circuito real con un diseño teórico. Es una representación 
                                            funcional utilizada para evaluar y detectar fallas o problemas 
                                            durante el desarrollo del concepto de un producto o antes de 
                                            lanzarse a producción</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={LabMan} alt="ProyectOne" />
                                            <Link to="" className="btn-floating activator halfway-fab waves-effect 
                                            waves-light blue darken-4">
                                            <i className="material-icons">add</i></Link>
                                    </div>
                                    <div className="card-content">
                                        <p><strong>Laboratorio de Manufactura Aditiva</strong></p>
                                        <p>La manufactura aditiva, conocida como impresión 3D, 
                                        le ofrece al sector industrial y de servicios una opción 
                                        de producción flexible, rápida y eficiente.</p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-daken 4">Laboratorio de Pruebas EMC
                                        <i className="material-icons right">close</i></span>
                                        <p>La manufactura aditiva, ampliamente conocida como impresión 3D, 
                                            está transformando la forma en que los productos son diseñados, 
                                            producidos y mantenidos. Es una evolución de la fabricación 
                                            industrial.  La manufactura aditiva le da la libertad de crear 
                                            formas que habrían sido imposibles utilizando métodos de 
                                            fabricación convencionales, permite la producción bajo demanda 
                                            sin herramientas o equipos dedicados, optimiza el proceso de 
                                            producción, instalación y configuración, desbloquea herramientas 
                                            de diseño digital y ofrece un rendimiento innovador y una 
                                            flexibilidad sin igual en la industria.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={LabMet} alt="ProyectOne" />
                                            <Link to="" className="btn-floating activator halfway-fab waves-effect 
                                            waves-light blue darken-4">
                                            <i className="material-icons">add</i></Link>
                                    </div>
                                    <div className="card-content">
                                        <p><strong>Laboratorio de Metrología</strong></p>
                                        <p>La fabricación con precisión proporciona soluciones rentables 
                                            para cumplir con estandares de alta precisión.</p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-daken 4">Laboratorio de Metrología
                                        <i className="material-icons right">close</i></span>
                                        <p>El Laboratorio de Metrología del CIITA 
                                            (Centro de Innovación e Integración de Tecnologías Avanzadas) 
                                            en Cd Juárez, ofrece servicios de  precisión, repetibilidad y 
                                            confiabilidad constantes en la ejecución de las tareas de 
                                            medición. Nuestro enfoque se adapta a las necesidades de cada 
                                            cliente desde el desarrollo del concepto de diseño hasta su 
                                            producción en masa.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={LabMat} alt="ProyectOne" />
                                            <Link to="" className="btn-floating activator halfway-fab waves-effect 
                                            waves-light blue darken-4">
                                            <i className="material-icons">add</i></Link>
                                    </div>
                                    <div className="card-content">
                                        <p><strong>Laboratorio de Análisis Materiales</strong></p>
                                        <p>Las técnicas analíticas y equipamiento del laboratorio de 
                                            análisis de materiales nos permiten evaluar las pripiedades
                                             del material</p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-daken 4">Laboratorio de Análisis Materiales
                                        <i className="material-icons right">close</i></span>
                                        <p>El laboratorio està utillado con los medios analíticos más 
                                            modernos que permiten la realización con la màxima precisión y 
                                            rapidez de toda classe de anàlisis, comprobaciones y 
                                            determinaciones en materiales poliméricos , pintures , 
                                            recubrimientos protectores , resines y adhesivos.
                                            Los diferentes tipos de cromatografia aplicada al anàlisis de 
                                            materiales poliméricos en contacto con alimentós y bebidas, 
                                            permite la identificación y cuantificación de compuestos 
                                            orgánicos con gra sensibilidad.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={LabEma} alt="ProyectOne" />
                                            <Link to="" className="btn-floating activator halfway-fab waves-effect 
                                            waves-light blue darken-4">
                                            <i className="material-icons">add</i></Link>
                                    </div>
                                    <div className="card-content">
                                        <p><strong>Laboratorio de Pruebas EMC</strong></p>
                                        <p>Ofrece desarrollo de pruebas electromagnéticas de productos 
                                            diversos, para dar soporte al sector industrial desde su diseño 
                                            hasta el producto final.</p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-daken 4">Laboratorio de Pruebas EMC
                                        <i className="material-icons right">close</i></span>
                                        <p>La compatibilidad electromagnética, también conocida como EMC, 
                                            es la interacción de los equipos eléctricos y electrónicos con 
                                            su entorno electromagnético y con otros equipos. 
                                            Las pruebas de compatibilidad electromagnética analizan la 
                                            capacidad de los dispositivos electrónicos para funcionar según 
                                            lo previsto cuando se encuentran cerca de otros dispositivos 
                                            electrónicos o en presencia de perturbaciones electromagnéticas 
                                            que interfieren con su operación prevista.</p>
                                    </div>
                                </div>
                            </div>
                            
                       </div>
                  </div>              
            </section>
            </Fragment>
        )
    }
}