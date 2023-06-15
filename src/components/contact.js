import React, { useState } from 'react';
import '../styles/contact.css'; // Import the CSS file for styling
import axios from 'axios';

function ContactCard() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    // Perform desired action with form data
    axios
      .post('https://getform.io/f/eacca745-797c-4830-a65f-686e27063277', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <div className="contact-card">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label id="message-label" htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        {/* Add additional form fields */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactCard;
