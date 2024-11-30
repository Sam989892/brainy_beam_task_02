import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import stockImages from '../stockImages';
import '../styles/contact.css';
export const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bentolio">
      <div className="contact-container">
        <Header />
        
        <div className="bento-grid">
          {/* Contact Intro Box */}
          <motion.div 
            className="bento-item contact-intro"
            style={{
              opacity: isLoaded ? 1 : 0,
              transitionDelay: '0.2s'
            }}
          >
            <h1>Let's Connect</h1>
            <p>Feel free to reach out for collaborations or just a friendly hello</p>
          </motion.div>

          {/* Contact Form Box */}
          <motion.div 
            className="bento-item contact-form"
            style={{
              opacity: isLoaded ? 1 : 0,
              transitionDelay: '0.3s'
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                />
              </div>
              <button type="submit">Send Message</button>
            </form>
          </motion.div>

          {/* Social Links Box */}
          <motion.div 
            className="bento-item social-links"
            style={{
              opacity: isLoaded ? 1 : 0,
              transitionDelay: '0.4s'
            }}
          >
            <h3>Find me on</h3>
            <div className="social-grid">
              <a href="https://github.com/Sam989892" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/madni14saiyed/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="mailto:smdmadni@gmail.com">
                Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}; 