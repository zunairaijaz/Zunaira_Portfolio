import React from 'react';
import './Portfolio.css'; // Ensure this file exists and includes necessary styling

const skills = [
  { name: 'HTML5', icon: 'fa-html5' },
  { name: 'CSS3', icon: 'fa-css3-alt' },
  { name: 'PHP', icon: 'fa-php' },
  { name: 'Laravel', icon: 'fa-laravel' },
  { name: 'Angular', icon: 'fa-angular' },
  { name: 'React.js', icon: 'fa-react' },
  { name: 'Vue.js', icon: 'fa-vuejs' },
  { name: 'JavaScript', icon: 'fa-js' },
  { name: 'Node.js', icon: 'fa-node' },
  { name: 'NPM', icon: 'fa-npm' },
  { name: 'MySQL Database', icon: 'fa-database' },
  { name: 'AWS', icon: 'fa-aws' },
  { name: 'Firebase', icon: 'fa-fire' },
  { name: 'Python', icon: 'fa-python' },
  { name: 'Docker', icon: 'fa-docker' },
];

export default function Skills() {
  return (
    <div className="container py-5 text-white" id="skills">
      <h2 className="mb-3 text-center fw-bold display-6 text-neon">My Skills</h2>

      <p className="text-center text-bold fs-6 px-3 px-md-5 mb-5">
        I will put your ideas and your wishes into a unique web project that inspires both you and your customers.
      </p>

      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4">
        {skills.map((skill, index) => (
          <div key={index} className="col text-center">
            <div
              className="bg-dark shadow rounded-4 d-flex align-items-center justify-content-center mx-auto"
              style={{
                width: '140px',
                height: '140px',
              }}
            >
              <i className={`fab ${skill.icon} fa-4x text-info`}></i>
            </div>
            <div className="mt-2 fw-bold text-light">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
