import React, { useState } from 'react';
import emailjs from 'emailjs-com';
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

    // EmailJS service
    emailjs.send(
      "service_zbyhu0l",   // e.g. service_xxxxxx
      "template_x97cb6c",  // e.g. template_xxxxxx
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "VkhyynbhDkfbKfFMN"    // e.g. XyZ123ABC
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("✅ Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        console.log(error.text);
        alert("❌ Failed to send message. Please try again.");
      }
    );
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
