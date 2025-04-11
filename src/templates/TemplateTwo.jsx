import React from 'react';

const TemplateTwo = ({ data = {}, theme = {} }) => {
  const {
    name = 'Your Name',
    email = 'your.email@example.com',
    profilePhoto,
    summary = 'Add a strong professional summary.',
    experience = [],
    education = [],
    projects = [],
    skills = [],
    languages = [],
    hobbies = [],
  } = data;

  const {
    font = 'Arial',
    color = '#000',
    headingColor = '#0056b3',
  } = theme;

  return (
    <div className="container-fluid" style={{ fontFamily: font, color }}>
      <div className="row">
        {/* Sidebar Section */}
        <div className="col-md-4 bg-light p-4">
          {profilePhoto && profilePhoto.trim() !== '' && (
            <div className="text-center mb-3">
              <img
                src={profilePhoto}
                alt="Profile"
                className="rounded-circle"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
            </div>
          )}

          <h4 className="fw-bold text-center">{name}</h4>
          <p className="text-center text-muted">{email}</p>
          <hr />

          <h6 className="text-secondary fw-bold">Skills</h6>
          <ul>
            {skills.map((s, i) => <li key={i}>{s.skill || s}</li>)}
          </ul>

          <h6 className="text-secondary fw-bold mt-3">Languages</h6>
          <ul>
            {languages.map((l, i) => <li key={i}>{l.language || l}</li>)}
          </ul>

          <h6 className="text-secondary fw-bold mt-3">Hobbies</h6>
          <ul>
            {hobbies.map((h, i) => <li key={i}>{h.hobby || h}</li>)}
          </ul>
        </div>

        {/* Main Section */}
        <div className="col-md-8 p-4">
          <h5 className="fw-bold" style={{ color: headingColor }}>Summary</h5>
          <p>{summary}</p>

          <h5 className="fw-bold" style={{ color: headingColor }}>Experience</h5>
          {experience.map((exp, i) => (
            <div key={i} className="mb-3">
              <strong>{exp.company}</strong> - {exp.title}<br />
              <small>{exp.from} - {exp.to}</small>
              <ul>
                {(Array.isArray(exp.tasks) ? exp.tasks : exp.tasks?.split('\n') || []).map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          ))}

          <h5 className="fw-bold" style={{ color: headingColor }}>Projects</h5>
          <ul>
            {projects.map((proj, i) => (
              <li key={i}>
                <strong>{proj.projectName}</strong> ({proj.from} - {proj.to})<br />
                {proj.description}<br />
                {proj.projectUrl && (
                  <a href={proj.projectUrl} target="_blank" rel="noreferrer">
                    {proj.projectUrl}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <h5 className="fw-bold" style={{ color: headingColor }}>Education</h5>
          {education.map((edu, i) => (
            <div key={i} className="mb-2">
              <strong>{edu.qualification}</strong> - {edu.college}<br />
              <small>Score: {edu.percentage}% | Year: {edu.year}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateTwo;
