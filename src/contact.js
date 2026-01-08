import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import './Portfolio.css';

export default function Contact() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = `${formValues.firstName} ${formValues.lastName}`;
    const formData = {
      access_key: "d8410889-c14b-4f07-8de3-622f6bece21e",
      subject: "New Contact Form Submission",
      from_name: fullName,
      fullName,
      email: formValues.email,
      phone: formValues.phone,
      interest: formValues.service,
      message: formValues.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormValues({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Submission Error:", err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container py-5 text-white">
      <div className="row g-5 align-items-stretch">

        {/* Left Info Card */}
        <div className="col-md-5">
          <div className="w-100 h-100 p-4 d-flex flex-column justify-content-center">
            <div className="text-white mt-4 d-flex flex-column align-items-start mx-auto" style={{ maxWidth: '400px' }}>
              <div className="d-flex align-items-center mb-3">
                <div className="icon-circle me-3" style={iconStyle}>
                  <FaEnvelope className="text-neon" />
                </div>
                <a href="mailto:shamila.yasmeen10@gmail.com" className="text-white text-decoration-none">
                shamila.yasmeen10@gmail.com
                </a>
              </div>
              {/* <div className="d-flex align-items-center mb-3">
                <div className="icon-circle me-3" style={iconStyle}>
                  <FaPhone className="text-neon" />
                </div>
                <span>+92-XXX-XXXXXXX</span>
              </div> */}
              <div className="d-flex align-items-center">
                <div className="icon-circle me-3" style={iconStyle}>
                  <FaMapMarkerAlt className="text-neon" />
                </div>
                <span>Multan, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="col-md-7">
          <div className="p-5 rounded-4 shadow-lg border border-cyan-400" style={formContainerStyle}>
            <h2 className="mb-4 text-center fw-bold text-neon">Let’s work together!</h2>
            <p className="mb-4 text-center text-light">
              I design and build beautifully simple, high-performance applications from front to back —
              and I truly love what I do. Clean code. Clean design. Seamless experiences.
            </p>

            <form onSubmit={handleSubmit} className="row g-4">
              <div className="col-md-6">
                <label className="form-label text-white">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control modern-input"
                  value={formValues.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label text-white">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control modern-input"
                  value={formValues.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label text-white">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control modern-input"
                  value={formValues.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label text-white">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control modern-input"
                  value={formValues.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label className="form-label text-white">What can I help you with?</label>
                <select
                  name="service"
                  className="form-select modern-input"
                  value={formValues.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Branding Design">Branding Design</option>
                  <option value="Web Design">Web Design</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="App Design">App Design</option>
                </select>
              </div>
              <div className="col-12">
                <label className="form-label text-white">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  className="form-control modern-input"
                  value={formValues.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="col-12 text-end">
                <button
                  type="submit"
                  className="btn btn-outline-cyan px-4 py-2"
                  style={submitButtonStyle}
                >
                  <FaEnvelope className="me-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

// 🔵 Neon icon style
const iconStyle = {
  background: 'rgba(0, 255, 255, 0.1)',
  border: '1px solid #00ffff',
  borderRadius: '50%',
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 0 10px #00ffff',
  width: '44px',
  height: '44px',
  minWidth: '44px',
};

// 🔵 Form background style
const formContainerStyle = {
  background: "rgba(26, 26, 46, 0.7)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 8px 24px rgba(0, 255, 213, 0.1)",
};

// 🔵 Submit button hover effect
const submitButtonStyle = {
  color: "#00ffff",
  border: "1px solid #00ffff",
  backgroundColor: "transparent",
  transition: "all 0.3s ease",
};
