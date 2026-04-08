import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Contact</h2>

      <form className="contact-form">
        <label>First Name</label>
        <input
          className="contact-input"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <label>Last Name</label>
        <input
          className="contact-input"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          className="contact-input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Comments</label>
        <textarea
          className="contact-textarea"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Contact;