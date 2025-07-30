import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      className="text-white py-5 mt-5"
      style={{
        backgroundColor: '#0f172a',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="container text-center">
        {/* Name / Branding */}
        <h3 className="fw-bold text-neon mb-3">Zunaira Ijaz</h3>

        {/* Social Links */}
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a
            href="https://github.com/zunairaijaz"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/zunaira-ijaz-103a4021b            "
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto: zunairaijaz2018@gmail.com
            "
            className="text-white"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Quick Links */}
        <div className="d-flex flex-wrap justify-content-center gap-3 small mb-3">
          <a href="#services" className="text-light text-decoration-none">Services</a>
          <a href="#projects" className="text-light text-decoration-none">Projects</a>
          <a href="#resume" className="text-light text-decoration-none">Resume</a>
          <a href="#skills" className="text-light text-decoration-none">Skills</a>
          <a href="#testimonials" className="text-light text-decoration-none">Testimonials</a>
          <a href="#contact" className="text-light text-decoration-none">Contact</a>
        </div>

        {/* Copyright */}
        <p className="text-secondary small mb-0">
          &copy; {new Date().getFullYear()} zunaira ijaz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
