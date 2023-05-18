import React from 'react';
import '../styles/contact.css'; // Import the CSS file for styling

function ContactCard() {
  return (
    <div className="contact-card">
      <h2>Contact Me</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label id="message-label" htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4"></textarea>
        </div>
        {/* Add additional form fields */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function handleSubmit(event) {
  event.preventDefault(); // Prevents the default form submission behavior
  // Perform desired action with form data
}

<form onSubmit={handleSubmit}>
  {/* Form fields */}
  <button type="submit">Submit</button>
</form>

export default ContactCard;
