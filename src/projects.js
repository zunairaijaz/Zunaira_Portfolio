import React from 'react';
import './Portfolio.css';
import { projectsData } from './projectsData';

export default function Projects() {
  return (
    <div className="container py-5 text-neon">
      <h2 className="mb-5 text-center fw-bold display-6">My Recent Projects
</h2>
<p className="text-center text-white text-bold fs-6 px-3 px-md-5 mb-5">
We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.      </p>
      <div className="d-flex flex-column gap-5">
        {projectsData.map((project, index) => (
          <div
            className="project-modern-card d-flex flex-column flex-md-row rounded-4 overflow-hidden shadow-lg"
            key={index}
          >
            {/* Left Content */}
            <div className="project-left p-4 p-md-5 d-flex flex-column justify-content-between">
              <div>
                <h3 className="text-neon fw-bold mb-3">{project.title}</h3>
                <p className="text-light fw-medium fs-6 lh-lg mb-4" style={{ maxWidth: '90%' }}>
  <em>{project.description}</em>
</p>

<ul className="list-unstyled text-white mb-4 ps-0">
  {project.features?.map((feature, i) => (
    <li key={i} className="d-flex align-items-start gap-2 mb-2">
      <span className="text-primary mt-1">✔</span>
      <span className="text-white-50">{feature}</span>
    </li>
  ))}
</ul>

              </div>
              <div className="d-flex flex-wrap gap-2 mt-auto">
                {project.tech?.map((tech, i) => (
                  <span key={i} className="badge rounded-pill hire-btn px-3 py-2 small fw-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="project-right">
            <img
  src={project.image}
  alt={project.title}
  className="project-img"
/>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
