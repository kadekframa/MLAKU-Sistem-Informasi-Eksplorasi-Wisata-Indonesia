import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="container my-5">
        <h2 className='footer__title'>
          <span className="logo-text text-blue">Mlaku - Indonesia Tourism Exploration Information System</span>
        </h2>
        <p className='footer__tagline'>Get interesting tourist objects from various regions in Indonesia !</p>
      </div>
      <div className="container">

        <div className="row mb-4">

          <div className="col-md-3">
            <h3 className="footer__subtitle mb-4">Our Service</h3>
            <ul>
              <li className="footer_list-item">
                <Link to="/object-tourism">Object Tourism</Link>
              </li>
              <li className="footer_list-item">
                <Link to="/culinary">Culinary</Link>
              </li>
              <li className="footer_list-item">
                <Link to="/accommodation">Accommodation</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h3 className="footer__subtitle mb-4">Sosial Media</h3>
            <ul>
              <li className="footer_list-item">
                <a href="https://www.linkedin.com/company/dicoding/"><i class="fa fa-instagram text-danger"></i> Linkedin</a>
              </li>
              <li className="footer_list-item">
                <a href="https://www.facebook.com/dicoding/"><i class="fa fa-facebook-square text-primary"></i> Facebook</a>
              </li>
              <li className="footer_list-item">
                <a href="https://www.instagram.com/dicoding"><i class="fa fa-instagram text-danger"></i> Instagram</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h3 className="footer__subtitle mb-4">Address</h3>
            <ul>
              <li className="footer_list-item mb-3">
                <i class="fa fa-map-marker text-danger"></i>Jln. Taman Giri, Perumahan Griya Nugraha, Blok B.54, Br. Mumbul, Kec. Kuta Selatan, Kabupaten Badung, Bali</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h3 className="footer__subtitle mb-4">Help Center</h3>
            <ul>
              <li className="footer_list-item mb-3">
                08523677283 (Inaya)
              </li>
              <li className="footer_list-item mb-3">
                087861234542 (Fachrul)
              </li>
              <li className="footer_list-item mb-3">
                082463589736 (Dharma)
              </li>
              <li className="footer_list-item mb-3">
                088236099236 (Frama)
              </li>
            </ul>
          </div>

        </div>

      </div>
      <div className="footer__bottom d-flex text-center align-items-center justify-content-center">
        &copy; 2022 <span className="mx-2">Mlaku - Indonesia Tourism Exploration Information System  </span>
      </div>
    </footer>
  )
}

export default Footer;