import React, { Component } from "react";
import Render from "../../images/meet/render.jpg";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";

import Dire from "../../images/meet/Lydia.jpg";
import Carlos from "../../images/meet/Carlos.jpg";
import Will from "../../images/meet/Will.jpg";
import Adriana from "../../images/meet/Adriana.jpg";
import Cris from "../../images/meet/Cristina.jpg";
import Jon from "../../images/meet/Jon.jpg";
import Art from "../../images/meet/Arturo.jpg";
import Ger from "../../images/meet/German.jpg";
import Kevin from "../../images/meet/Kevin.jpg";
import Jesus from "../../images/meet/Jesus.jpg";
import Mart from "../../images/meet/Martha.jpg";
import Nancy from "../../images/meet/Nancy.jpg";
import Vidal from "../../images/meet/Vidal.jpg";
import AvatarW from "../../images/meet/avatarw.jpg";
import Julio from "../../images/meet/Julio.jpg";
import Gloria from "../../images/meet/Gloria.jpg";

export default class Meet extends Component {
  render() {
    return (
      <section id="meet" className="meet meet-contact scrollspy">
        <div className="container">
          <div className="row">
            <h4 className="center">
              <span className="black-text">Conócenos</span>
            </h4>

            <div className="col s12 m6">
              <div className="card">
                <div className="card-image">
                  <img src={Render} alt="Render" />
                  <span className="card-title">CIITA - Ciudad Juárez</span>
                </div>
              </div>
            </div>

            <div className="col s12 m6">
              <ul class="collapsible popout">
                <li>
                  <div class="collapsible-header">
                    <i class="material-icons">filter_drama</i>Misión
                  </div>
                  <div class="collapsible-body">
                    <span>
                      Realizar investigación aplicada e integración de
                      tecnologías innovadoras, para dar solución a los sectores
                      productivo y de servicios del estado de Chihuahua. Así
                      como promover la educación de alto nivel tecnológico que
                      se imparte en los posgrados del Instituto Politécnico
                      Nacional.
                    </span>
                  </div>
                </li>
                <li>
                  <div class="collapsible-header">
                    <i class="material-icons">place</i>Visión
                  </div>
                  <div class="collapsible-body">
                    <span>
                      Ser el centro líder en innovación e integración
                      tecnológica de alto nivel, por contribuir al desarrollo
                      tecnológico nacional para los sectores productivos y de
                      servicios.
                    </span>
                  </div>
                </li>
                <li>
                  <div class="collapsible-header">
                    <i class="material-icons">whatshot</i>Obejetivo General
                  </div>
                  <div class="collapsible-body">
                    <span>
                      Crear un ecosistema de innovación para el desarrollo de
                      proyectos tecnológicos para consolidar la competitividad
                      de las empresas de bienes y servicios, público, social y
                      privado, promoviendo la formación de recursos humanos que
                      permitan responder a las necesidades económicas, políticas
                      y sociales que demanda el desarrollo tecnológico de la
                      región y del país.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <h4 className="center">
            <span className="black-text">Equipo de Trabajo</span>
          </h4>
          <div className="row">
            <div className="col s12 m6">
              <div className="card horizontal blue-grey lighten-5">
                <div className="card-image">
                  <img src={Dire} alt="ImgDire" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      <strong>Mtra. Lydia del Carmen Nesbitt Valenzuela</strong>
                    </p>
                    <p>
                      <strong>Directora</strong>
                    </p>
                    <p>
                      <strong>Correo: </strong>lnesbitt@ipn.mx
                    </p>
                    <p>
                      <strong>Cel: </strong>915 355 7791
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card horizontal blue-grey lighten-5">
                <div className="card-image">
                  <img src={Carlos} alt="ImgDire" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      <strong>Mtro. Carlos Alfredo González Chávez</strong>
                    </p>
                    <p>
                      <strong>Coordinador de Investigación Aplicada</strong>
                    </p>
                    <p>
                      <strong>Correo: </strong>cgonzalezc@ipn.mx
                    </p>
                    <p>
                      <strong>Cel: </strong>61 4137 83 81
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card horizontal blue-grey lighten-5">
                <div className="card-image">
                  <img src={Will} alt="ImgDire" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      <strong>Lic. Earl William James Barousse</strong>
                    </p>
                    <p>
                      <strong>Coordinador de Enlace y Gestión Técnica</strong>
                    </p>
                    <p>
                      <strong>Correo: </strong>ejames@ipn.mx
                    </p>
                    <p>
                      <strong>Cel: </strong>61 4345 92 77
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card horizontal blue-grey lighten-5">
                <div className="card-image">
                  <img src={Adriana} alt="ImgDire" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      <strong>M. A. Adriana Ponce González</strong>
                    </p>
                    <p>
                      <strong>Subdirectora Administrativa</strong>
                    </p>
                    <p>
                      <strong>Correo: </strong>aponceg@ipn.mx
                    </p>
                    <p>
                      <strong>Cel: </strong>61 4184 50 64
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card horizontal blue-grey lighten-5">
                <div className="card-image">
                  <img src={Cris} alt="ImgDire" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      <strong>
                        Mtra. Ethel Cristina De la Torre Santiesteban
                      </strong>
                    </p>
                    <p>
                      <strong>
                        Jefa del Departamento de Capital Humano y Recursos
                        Financieros{" "}
                      </strong>
                    </p>
                    <p>
                      <strong>Correo: </strong>edelatorres@ipn.mx
                    </p>
                    <p>
                      <strong>Cel: </strong>614 184 72 63
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card horizontal blue-grey lighten-5">
                <div className="card-image">
                  <img src={Jon} alt="ImgJon" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      <strong>Ing. José Jonatan Islas Austria</strong>
                    </p>
                    <p>
                      <strong>Jefe de la Unidad de Soporte Técnico </strong>
                    </p>
                    <p>
                      <strong>Correo: </strong>jjislas@ipn.mx
                    </p>
                    <p>
                      <strong>Cel: </strong>771 202 26 53
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card horizontal blue-grey lighten-5">
                <div className="card-image">
                  <img src={Ger} alt="ImgDire" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      <strong>Dr. Germán Quiroz Merino</strong>
                    </p>
                    <p>
                      <strong>Coordinador de Innovación </strong>
                    </p>
                    <p>
                      <strong>Correo: </strong>gquirozm@ipn.mx
                    </p>
                    <p>
                      <strong>Cel: </strong>55 9192 18 03
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card horizontal blue-grey lighten-5">
                <div className="card-image">
                  <img src={Kevin} alt="ImgDire" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      <strong>Ing. Kevin J. Tamayo Rodríguez</strong>
                    </p>
                    <p>
                      <strong>Jefe del Departamento de Electrónica </strong>
                    </p>
                    <p>
                      <strong>Correo: </strong>ktamayor@ipn.mx
                    </p>
                    <p>
                      <strong>Cel: </strong>55 6962 0645
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card horizontal blue-grey lighten-5">
                <div className="card-image">
                  <img src={Art} alt="ImgDire" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      <strong>Dr. Arturo Solís Santome</strong>
                    </p>
                    <p>
                      <strong>
                        Jefe del Departamento de Desarrollo de Software{" "}
                      </strong>
                    </p>
                    <p>
                      <strong>Correo: </strong>asoliss@ipn.mx
                    </p>
                    <p>
                      <strong>Cel: </strong>55 3200 0009
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card horizontal blue-grey lighten-5">
                <div className="card-image">
                  <img src={Jesus} alt="ImgDire" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      <strong>Ing. Jesús Irán Grageda Arellano</strong>
                    </p>
                    <p>
                      <strong>
                        Jefe del Departamento de Cómputo Avanzado{" "}
                      </strong>
                    </p>
                    <p>
                      <strong>Correo: </strong>jgragedaa@ipn.mx
                    </p>
                    <p>
                      <strong>Cel: </strong>55 3564 8784
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card horizontal blue-grey lighten-5">
                <div className="card-image">
                  <img src={Julio} alt="ImgDire" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      <strong>Mtro. Julio Gómez Landeros</strong>
                    </p>
                    <p>
                      <strong>
                        Jefe del Departamento de Administración de Proyectos{" "}
                      </strong>
                    </p>
                    <p>
                      <strong>Correo: </strong>jgomezla@ipn.mx
                    </p>
                    <p>
                      <strong>Cel: </strong>55 3445 21 73
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card horizontal blue-grey lighten-5">
                <div className="card-image">
                  <img src={Vidal} alt="ImgDire" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      <strong>Lic. Vidal Salazar Sánchez</strong>
                    </p>
                    <p>
                      <strong>Jefe de la Unidad de Vinculación </strong>
                    </p>
                    <p>
                      <strong>Correo: </strong>vsalazars@ipn.mx
                    </p>
                    <p>
                      <strong>Cel: </strong>55 3235 4608
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card horizontal blue-grey lighten-5">
                <div className="card-image">
                  <img src={AvatarW} alt="ImgDire" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      <strong>
                        M. En I. Claudia Guadalupe Bojórquez López{" "}
                      </strong>
                    </p>
                    <p>
                      <strong>
                        Jefa del Departamento de Manufactura Avanzada{" "}
                      </strong>
                    </p>
                    <p>
                      <strong>Correo: </strong>cbojorquezl@ipn.mx
                    </p>
                    <p>
                      <strong>Cel: </strong>65 6278 0476
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card horizontal blue-grey lighten-5">
                <div className="card-image">
                  <img src={Mart} alt="ImgDire" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      <strong>Mtra. Martha I. Madero Villanueva</strong>
                    </p>
                    <p>
                      <strong>
                        Jefa de Departamento de Servicios Educativos{" "}
                      </strong>
                    </p>
                    <p>
                      <strong>Correo: </strong>mmaderov@ipn.mx
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card horizontal blue-grey lighten-5">
                <div className="card-image">
                  <img src={Nancy} alt="ImgDire" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      <strong>Lic. Nancy Flores Sánchez</strong>
                    </p>
                    <p>
                      <strong>
                        Jefa del Departamento de Recursos Materiales y Servicios
                        Generales
                      </strong>
                    </p>
                    <p>
                      <strong>Correo: </strong>nfloress@ipn.mx
                    </p>
                    <p>
                      <strong>Cel: </strong>65 6133 3943
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card horizontal blue-grey lighten-5">
                <div className="card-image">
                  <img src={Gloria} alt="ImgDire" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      <strong>Mtra. Gloria Isabel Moreno Huerta</strong>
                    </p>
                    <p>
                      <strong>
                        Jefa de Departamento de Análisis de Materiales{" "}
                      </strong>
                    </p>
                    <p>
                      <strong>Correo: </strong>gmorenoh@ipn.mx
                    </p>
                    <p>
                      <strong>Cel: </strong>65 6222 1906
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
