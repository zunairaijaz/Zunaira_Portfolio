import React, { useState } from 'react';
import { FaGithub, FaDownload } from 'react-icons/fa';
import Services from './services';
import Projects from './projects';
import Skills from './skills';
import Testimonials from './testimonials';
import Contact from './contact';
import ExperienceEducation from './experienceEducation';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Footer from './footer';
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('services');

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'skills', label: 'Skills' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <main className="bg-dark-purple text-dark min-vh-100">
      {/* Header */}
      <header className="py-3 px-4 sticky-top shadow d-flex justify-content-between align-items-center custom-header">
        <div className="d-flex align-items-center gap-2">
          <FaEnvelope className="text-highlight fs-5" />
          <a
            href="mailto:shamila.yaeen10@gmail.com"
            className="text-highlight fw-medium small text-decoration-none"
          >
            Let's Connect
          </a>
        </div>

        {/* Navigation */}
        <nav className="d-none d-lg-flex gap-4 text-white text-bold">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setActiveTab(id)}
              className={`nav-link position-relative ${activeTab === id ? 'active-tab' : ''}`}
            >
              {label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hire-btn">
          Hire Me!
        </a>
      </header>

      {/* Hero Section */}
      <section className="hero-section text-white">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between" style={{ minHeight: '50vh' }}>
          {/* Left Content */}
          <div className="hero-content text-start w-100 w-md-50 mb-5 mb-md-0 pe-md-5">
          <div className="hero-content text-start w-100 w-md-50 mb-5 mb-md-0 pe-md-5">
          <h3
  className="fw-semibold mb-2"
  style={{
    fontSize: '1.75rem',
    color: 'rgb(221 221 221 / var(--tw-text-opacity, 1))',
  }}
>
 I am Shumaila Yaseen
</h3>

  <h1 className="display-3 fw-bold text-neon mb-4">
  Next-Level Freelancer and
Senior Software Engineer.  </h1>
  <p className="fs-5 text-light">
    With 4+ years of experience, I am passionate about crafting cutting-edge Web and Mobile applications. With a strong proficiency in technologies such as Laravel, Vue.js, React.js, Angular, Nuxtjs, Nextjs, Node.js, Nestjs and Ionic, I bring a wealth of expertise to every project.
    <br />
    My commitment is to deliver high-quality solutions that meet and exceed client expectations. Let's build something extraordinary together! 💻🌐✨
  </p>
</div>



            <div className="btn-group mt-4">
            <a
  href="/Shamila_yasmeen.pdf"
  download
  className="btn btn-outline-light d-inline-flex align-items-center gap-2 px-4 py-2 rounded-3 fw-medium"
  style={{
    borderColor: '#00ffff',
    color: '#00ffff',
    transition: 'all 0.3s ease',
    marginRight:'18px'
  }}
  onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgba(0,255,255,0.1)')}
  onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
>
  Download CV
  <FaDownload />
</a>
              {/* <a href="https://github.com/zunairaijaz" target="_blank" rel="noreferrer" className="circle-btn">
                <FaGithub size={30} />
              </a>
              <a href="https://www.linkedin.com/in/zunaira-ijaz-103a4021b" target="_blank" rel="noreferrer" className="circle-btn ms-3">
                <FaLinkedin size={30} />
              </a> */}

            </div>
          </div>

          {/* Right Image */}
          <div className="hero-image text-center w-120 w-md-50">
            <div className="image-card-wrapper mx-auto">
              <div className="image-inner-card">
                <img
                  src="/pic5.jpg"
                  alt="Profile"
                  className="styled-square-img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <section className="stats-section py-5 text-center text-white bg-transparent">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-6 col-md-3">
                <div className="stat-box p-3">
                  <h2 className="display-5 fw-bold text-highlight">4+</h2>
                  <p className="mb-0 small">Years of Experience</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="stat-box p-3">
                  <h2 className="display-5 fw-bold text-highlight">50+</h2>
                  <p className="mb-0 small">Projects Completed</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="stat-box p-3">
                  <h2 className="display-5 fw-bold text-highlight">100+</h2>
                  <p className="mb-0 small">Happy Clients</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="stat-box p-3">
                  <h2 className="display-5 fw-bold text-highlight">100%</h2>
                  <p className="mb-0 small">Job Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Experience (Resume) Section */}
      <section id="resume">
        <ExperienceEducation />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
         {/* Footer Section */}
         <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
