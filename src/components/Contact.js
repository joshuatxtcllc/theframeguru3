import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setFormStatus({ submitted: false, error: 'Please fill in all fields' });
      return;
    }
    setFormStatus({ submitted: true, error: null });
  };

  return (
    <div className="contact-section">
      {formStatus.submitted ? (
        <div className="success-message">
          <p>Thank you for reaching out. We'll get back to you soon.</p>
          <button 
            className="btn btn-primary"
            onClick={() => setFormStatus({ submitted: false, error: null })}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>

          {formStatus.error && (
            <div className="form-error">
              {formStatus.error}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;