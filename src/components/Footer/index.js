import React from 'react';
import {Link} from 'react-router-dom';
import {Logo} from '../../assets'
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <div className='container'>
        <div className='row responsive-mobile d-flex pt-5 pb-4 px-4 px-md-0'>
          <div className='col'>
            <img src={Logo} alt="Logo Mlaku" width='94px' />
            <p>Semangat!</p>
          </div>

          <div className='col'>
            <div className='row mt-4 mt-md-0'>
              <h5 className="mx-1">Our Service</h5>
              <ul>
                <li className="nav-item mb-2 mx-3">
                  <Link className='nav-link p-0 text-muted' to="/object-tourism">Object Tourism</Link>
                </li>
                <li className="nav-item mb-2 mx-3">
                  <Link className='nav-link p-0 text-muted' to="/culinary">Culinary</Link>
                </li>
                <li className="nav-item mb-2 mx-3">
                  <Link className='nav-link p-0 text-muted' to="/accommodation">Accommodation</Link>
                </li>
                <li className="nav-item mb-2 mx-3">
                  <Link className='nav-link p-0 text-muted' to="/about">About Us</Link>
                </li>
              </ul>
            </div>
            <div className='row mt-4 mt-md-0'>
              <h5 className="mx-1">Sosial Media</h5>
              <ul>
                <li className="nav-item mb-2 mx-3">
                  <a href="https://www.linkedin.com/company/dicoding/" className='nav-link p-0 text-muted'><i class="fa fa-instagram text-danger"></i> Instagram</a>
                </li>
                <li className="nav-item mb-2 mx-3">
                  <a href="https://www.facebook.com/dicoding/" className='nav-link p-0 text-muted'><i class="fa fa-facebook-square text-primary"></i> Facebook</a>
                </li>
                <li className="nav-item mb-2 mx-3">
                  <a href="https://www.instagram.com/dicoding" className='nav-link p-0 text-muted'><i class="fa fa-email text-danger"></i> Gmail</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className='col'>
            
            <div className='row mt-4 mt-md-0'>
              <h5 className="mx-1">Help Center</h5>
              <ul>
                <li className="nav-item mb-2 mx-3">
                  <p className='m-0 text-muted'><i></i>08523677283 (Inaya)</p>
                </li>
                <li className="nav-item mb-2 mx-3">
                  <p className='m-0 text-muted'><i></i>087861234542 (Fachrul)</p>
                </li>
                <li className="nav-item mb-2 mx-3">
                  <p className='m-0 text-muted'><i></i>082463589736 (Dharma)</p>
                </li>
                <li className="nav-item mb-2 mx-3">
                  <p className='m-0 text-muted'><i></i>088236099236 (Frama)</p>
                </li>
              </ul>
            </div>
            
            <div className='row mt-4 mt-md-0'>
              <h5 className="mx-1">Address</h5>
              <ul>
                <li className="nav-item mb-2 mx-3">
                  <p className='m-0 text-muted'>
                  <i className="fa fa-map-marker text-danger"></i>
                    Jln. Taman Giri, Perumahan Griya Nugraha, Blok B.54,
                    Br. Mumbul, Kec. Kuta Selatan, Kabupaten Badung, Bali
                  </p>
                </li>
              </ul>
            </div>
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
