import React, { useState } from 'react';
import './Contact.css';
import './Home.css';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log values (later: integrate EmailJS or backend)
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    
    <div id="contact" className="contact-container">
      <h1 className='h1-'>Email Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          rows="5"
          value={formData.message} 
          onChange={handleChange} 
          required 
        />
        <button type="submit" className="send-btn">Send</button>
      </form>
    </div>
    
  );
}
