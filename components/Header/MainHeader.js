import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logoImage from './images/logo.svg';
import './MainHeader.css';

function HeaderMenu(props) {
  const [showModal, setShowModal] = useState(false);

  const handleDownloadClick = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='bg-custom'>
      <header className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logoImage} alt="Logo" className="logo-image fluid" />
          </a>
          <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav custom-ul">
              <li className="nav-item">
                <a className="nav-link text-white" href="#projects">Overview</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#sampler">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-button text-white" href="#" onClick={handleDownloadClick}>Download CV</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Select CV Language</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <p>Please select the language of the CV you want to download:</p>
                <div className="d-flex">
                  <button type="button" className="btn btn-primary me-1" onClick={() => { setShowModal(false); window.location.href = '/cv-en.pdf'; }}>English</button>
                  <button type="button" className="btn btn-secondary ms-1" onClick={() => { setShowModal(false); window.location.href = '/cv-es.pdf'; }}>Español</button>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderMenu;