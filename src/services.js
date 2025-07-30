import React, { useEffect } from 'react';
import './services.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLaptopCode, FaMobileAlt, FaPencilRuler } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    description: 'Ensure your website looks great on any device,with layouts that adapt to different screen sizes seamlessly.',
    icon: <FaLaptopCode size={48} />,
  },
  {
    title: 'Mobile Apps',
    description: 'Setup mobile apps with latest frameworks and UI design to ensure your app looks great on any device',
    icon: <FaMobileAlt size={48} />,
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive designs focused on usability and impact.',
    icon: <FaPencilRuler size={48} />,
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="container py-5">
        <h2 className="section-title">My Quality Services</h2>
        <div className="services-wrapper">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="service-content">
                <div>
                  <h3 className="service-title">{svc.title}</h3>
                  <p className="service-desc">{svc.description}</p>
                </div>
                <div className="service-icon" >{svc.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}