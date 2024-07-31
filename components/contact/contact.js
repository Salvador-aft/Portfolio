import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';
import axios from 'axios';
import Email from './images/email.png';
import Localization from './images/localization.png';
import Number from './images/number.png';

function Contact() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  // State to manage notification message
  const [notification, setNotification] = useState('');

 // Function to handle changes in the input fields
const handleChange = (e) => {
  // Destructure name and value from the event target (input field)
  const { name, value } = e.target;
  // Update the formData state with the new value for the specific input field
  setFormData({
    ...formData, // Keep the existing values in formData
    [name]: value // Update the value of the specific field being changed
  });
};

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Send form data to the server
    axios.post('http://localhost:5000/contact', formData)
      .then(response => {
        // If successful, show success notification and reset form data
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
        // If there's an error, show error notification
        setNotification('There was an error sending the email.');
      });
  };

  return (
    <div className='bg-custom'>
      <div className='container'>
        <div className='row'>
          <div className='contact-info col-md-6'>
            <h2 className='text-white mt-5'>Contact Me</h2>
            <p className='text-white'>Let's develop something new, different, and more meaningful by making things more visual or technical</p>
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
                <p className='text-white'>Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>
          <div className='contact-form col-md-6'>
            <h2 className='text-white mt-5'>Drop a Line</h2>
            {/* Display notification if it exists */}
            {notification && <div className="alert alert-info">{notification}</div>}
            {/* Form submission handled by handleSubmit */}
            <form onSubmit={handleSubmit}>
              <div className="form-row mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange} // Update form data state on input change
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange} // Update form data state on input change
                />
              </div>
              <div className="form-row mb-3">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange} // Update form data state on input change
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange} // Update form data state on input change
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                className="form-input"
                value={formData.message}
                onChange={handleChange} // Update form data state on input change
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