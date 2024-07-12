import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';
import axios from 'axios';
import Email from './images/email.png';
import Localization from './images/localization.png';
import Number from './images/number.png';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [notification, setNotification] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/contact', formData)
      .then(response => {
        setNotification('Email sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      })
      .catch(error => {
        setNotification('There was an error sending the email.');
      });
  };

  return (
    <div className='bg-custom'>
      <div className='container'>
        <div className='row'>
          <div className='contact-info col-md-6'>
            <h2 className='text-white mt-5'>Contact Us</h2>
            <p className='text-white'>Let's make something new, different and more meaningful or make things more visual or conceptual?</p>
            <div className='margin-icon d-flex align-items-center'>
              <img src={Number} alt='Phone Icon' className='img-fluid icon' />
              <div>
                <p className='text-secondary'>Call Me</p>
                <p className='text-white'>+54 9 11 7361-0378</p>
              </div>
            </div>
            <div className='margin-icon d-flex align-items-center mt-4'>
              <img src={Email} alt='Email Icon' className='img-fluid icon' />
              <div>
                <p className='text-secondary'>Email</p>
                <p className='text-white'>salvadorfarias2010@gmail.com</p>
              </div>
            </div>
            <div className='margin-icon d-flex align-items-center mt-4'>
              <img src={Localization} alt='Localization Icon' className='img-fluid icon' />
              <div>
                <p className='text-secondary'>Address</p>
                <p className='text-white'>El Boyero 933, Burzaco, Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>
          <div className='contact-form col-md-6'>
            <h2 className='text-white mt-5'>Drop a Line</h2>
            {notification && <div className="alert alert-info">{notification}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-row mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row mb-3">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                className="form-input"
                value={formData.message}
                onChange={handleChange}
              />
              <button type="submit" className="submit-button mt-5">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;