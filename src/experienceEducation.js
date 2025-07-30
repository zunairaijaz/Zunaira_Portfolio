import React from 'react';
import './Portfolio.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const workExperience = [
  {
    title: 'Senior Software Engineer',
    company: 'Polyphhasic Devs ltd.',
    duration: '07 Jun 2022 – Present',
    description: "With expertise in front-end development,I have honed my skills in React.js to craft seamless user interfaces and engaging web experiences. My proficiency extends to integrating APIs, including ChatGPT, to enhance functionality and user interaction. Leveraging AWS for deployment.",
  },
  {
    title: 'Software Engineer',
    company: 'StackUp Technologies',
    duration: '06 Jun 2022 – Jun 2023',
    description: 'I spearheaded projects in the AI domain, notably the "Grants AI" initiative, where orchestrated the extraction of data from the UK Charity Commission website. This data powered our applications focused on grants and fundings, enriching them with vital insights. Employing ChatGPT,I engineered a chatbot to streamline user interactions and enhance engagement. ',
  },
];

const education = [
  {
    degree: 'BSc Computer Science',
    institute: 'NUCES-FAST, CFD',
    duration: '2018 – 2022',
    description: 'Focused on algorithms, software design, databases, and teamwork projects.',
  },

];

export default function ExperienceEducation() {
  return (
    <div className="container py-5 text-white" id="experience-education">
      <h2 className="mb-5 text-center fw-bold display-4 text-neon"> Experience & Education</h2>
      <div className="row gx-5 gy-4">
        {/* Work Experience */}
        <div className="col-md-6">
          <h3 className="text-neon mb-4"><FaBriefcase className="me-2" />My Experience</h3>
          {workExperience.map((item, i) => (
            <div key={i} className="glass-card p-4 mb-4 rounded-4 shadow-lg">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <h4 className="fw-bold fs-3 mb-1">{item.title}</h4>
                <span className="text-neon fw-semibold small">{item.duration}</span>
              </div>
              <p className="text-highlight fw-semibold mb-2">{item.company}</p>
              <p className="text-light fs-6 lh-lg mb-0">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="col-md-6">
          <h3 className="text-neon mb-4"><FaGraduationCap className="me-2" />My Education</h3>
          {education.map((item, i) => (
            <div key={i} className="glass-card p-4 mb-4 rounded-4 shadow-lg">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <h4 className="fw-bold fs-4 mb-1">{item.degree}</h4>
                <span className="text-neon fw-semibold small">{item.duration}</span>
              </div>
              <p className="text-highlight fw-semibold mb-2">{item.institute}</p>
              <p className="text-light fs-6 lh-lg mb-0">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
