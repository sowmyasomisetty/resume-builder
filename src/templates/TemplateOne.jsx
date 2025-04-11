import React from 'react';

const TemplateOne = ({ data = {}, theme = {} }) => {
  const {
    name = 'Your Name',
    email = 'your.email@example.com',
    profilePhoto,
    summary = 'A brief professional summary goes here.',
    experience = [],
    projects = [],
    education = [],
    skills = [],
    languages = [],
    hobbies = [],
  } = data;

  const {
    font = 'Arial',
    color = '#000',
    headingColor = '#007bff',
  } = theme;

  return (
    <div className="container p-4" style={{ fontFamily: font, color }}>
      <div className="row mb-4 align-items-center">
        {profilePhoto && profilePhoto.trim() !== '' && (
          <div className="col-auto">
            <img
              src={profilePhoto}
              alt="Profile"
              className="rounded-circle"
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
          </div>
        )}

        <div className="col">
          <h2 className="fw-bold mb-0">{name}</h2>
          <p className="mb-0">{email}</p>
        </div>
      </div>

      <hr />

      {/* Summary */}
      <div className="mb-4">
        <h5 className="text-uppercase fw-bold" style={{ color: headingColor }}>Summary</h5>
        <p>{summary}</p>
      </div>

      {/* Experience */}
      <div className="mb-4">
        <h5 className="text-uppercase fw-bold" style={{ color: headingColor }}>Experience</h5>
        {experience.map((exp, i) => (
          <div className="card mb-2 p-3" key={i}>
            <h6><strong>{exp.title}</strong> at {exp.company}</h6>
            <p className="text-muted">{exp.from} - {exp.to}</p>
            <ul className="mb-0">
              {(Array.isArray(exp.tasks) ? exp.tasks : exp.tasks?.split('\n') || []).map((task, j) => (
                <li key={j}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="mb-4">
        <h5 className="text-uppercase fw-bold" style={{ color: headingColor }}>Projects</h5>
        {projects.map((proj, i) => (
          <div className="card mb-2 p-3" key={i}>
            <h6>{proj.projectName} ({proj.from} - {proj.to})</h6>
            <p>{proj.description}</p>
            {proj.projectUrl && (
              <a href={proj.projectUrl} target="_blank" rel="noreferrer">
                {proj.projectUrl}
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mb-4">
        <h5 className="text-uppercase fw-bold" style={{ color: headingColor }}>Education</h5>
        {education.map((edu, i) => (
          <div className="card mb-2 p-3" key={i}>
            <h6>{edu.qualification} - {edu.college} ({edu.year})</h6>
            <p>Percentage: {edu.percentage}%</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="mb-4">
        <h5 className="text-uppercase fw-bold" style={{ color: headingColor }}>Skills</h5>
        <ul className="list-inline">
          {skills.map((s, i) => (
            <li className="list-inline-item badge bg-primary text-white me-1 mb-1" key={i}>
              {s.skill || s}
            </li>
          ))}
        </ul>
      </div>

      {/* Languages */}
      <div className="mb-4">
        <h5 className="text-uppercase fw-bold" style={{ color: headingColor }}>Languages</h5>
        <ul className="list-inline">
          {languages.map((l, i) => (
            <li className="list-inline-item badge bg-secondary text-white me-1 mb-1" key={i}>
              {l.language || l}
            </li>
          ))}
        </ul>
      </div>

      {/* Hobbies */}
      <div className="mb-4">
        <h5 className="text-uppercase fw-bold" style={{ color: headingColor }}>Hobbies</h5>
        <ul className="list-inline">
          {hobbies.map((h, i) => (
            <li className="list-inline-item badge bg-info text-dark me-1 mb-1" key={i}>
              {h.hobby || h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TemplateOne;
