import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const backgroundStyle = {
    backgroundImage: "url('src/assets/contact.jpg')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    color: "#fff",
    padding: "80px 20px",
  };

  const inputStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.4)",
    color: "#fff",
  };

  const placeholderStyle = {
    color: "rgba(255, 255, 255, 0.7)",
  };

  return (
    <div style={backgroundStyle}>
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-center mb-3" style={{ fontWeight: 'bold', color: '#00f5d4' }}>Contact Us</h1>
        <p className="text-center mb-4" style={{ maxWidth: "600px" }}>
          We'd love to hear from you! Fill out the form below or reach out to us directly.
        </p>

        <form onSubmit={handleSubmit} style={{ maxWidth: "600px", width: "100%" }}>
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Your Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Your Message</label>
            <textarea
              name="message"
              className="form-control"
              placeholder="Write your message here..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              style={inputStyle}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-outline-light w-100">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
