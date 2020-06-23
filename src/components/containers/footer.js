import React, { Component } from 'react'
import '../../../node_modules/jquery/dist/jquery';
import '../../../node_modules/materialize-css/dist/js/materialize';
import { Link } from 'react-router-dom'
import '../styles/footer.css'

export default class footer extends Component {
    render() {
        return (
          <section className="section light-blue darken-4 white-text center scrollspy">
            <div className="row">
              <div className="col s12">
                <h4>Redes Sociales</h4>
                  <p>Sigue nuestras redes sociales para noticias relevantes de tecnología y actividades 
                    especiales
                  </p>
                  <Link to="" target="blank" className="white-text">
                  <i className="fab fa-facebook fa-3x"></i>
                  </Link>
                  <Link to="" target="blank" className="white-text">
                  <i className="fab fa-twitter fa-3x"></i>
                  </Link>
                  <Link to="" target="blank" className="white-text">
                  <i className="fab fa-instagram fa-3x"></i>
                  </Link>
              </div>
            </div>
          </section>
        )
    }
}