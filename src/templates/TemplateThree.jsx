import React from 'react';

const TemplateThree = ({ data = {}, theme = {} }) => {
  const {
    name = 'Your Name',
    email = 'your.email@example.com',
    profilePhoto,
    summary = 'Add a professional summary here.',
    experience = [],
    education = [],
    skills=[],
    projects = [],
    languages = [],
    hobbies = [],
  } = data;

  const {
    font = 'Arial',
    color = '#000',
    headingColor = '#17a2b8',
  } = theme;

  return (
    <div className="container-fluid" style={{ fontFamily: font, color }}>
      {/* Header */}
      <div className="bg-dark text-white p-3 rounded d-flex align-items-center">
        {profilePhoto && profilePhoto.trim() !== '' && (
          <img
            src={profilePhoto}
            alt="Profile"
            className="rounded-circle me-3"
            style={{
              width: '80px',
              height: '80px',
              objectFit: 'cover',
              border: '2px solid white',
            }}
          />
        )}

        {/* name & email */}
        <div>
          <h2 className="m-0">{name}</h2>
          <p className="m-0">{email}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-3">
        <h5 style={{ color: headingColor }} className="fw-bold">Professional Summary</h5>
        <p>{summary}</p>

        {/* experience */}
        <h5 style={{ color: headingColor }} className="fw-bold">Work Experience</h5>
        {experience.map((exp, i) => (
          <div key={i} className="mb-3">
            <p><strong>{exp.title}</strong> at <strong>{exp.company}</strong> ({exp.from} - {exp.to})</p>
            <ul>
              {(Array.isArray(exp.tasks) ? exp.tasks : exp.tasks?.split('\n') || []).map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* projects */}
        <h5 style={{ color: headingColor }} className="fw-bold">Projects</h5>
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

        {/* education */}
        <h5 style={{ color: headingColor }} className="fw-bold">Education</h5>
        {education.map((edu, i) => (
          <div key={i} className="mb-2">
            <p><strong>{edu.qualification}</strong> - {edu.college} ({edu.year})</p>
            <p>Percentage: {edu.percentage}%</p>
          </div>
        ))}
        {/* skills */}
        <h5 className="text-primary fw-bold">Skills</h5>
        <ul>
          {skills.map((s, i) => <li key={i}>{s.skill || s}</li>)}
        </ul>

        {/* languages */}
        <h5 style={{ color: headingColor }} className="fw-bold">Languages Known</h5>
        <ul>
          {languages.map((l, i) => (
            <li key={i}>{l.language || l}</li>
          ))}
        </ul>

        {/* hobbies */}
        <h5 style={{ color: headingColor }} className="fw-bold">Hobbies</h5>
        <ul>
          {hobbies.map((h, i) => (
            <li key={i}>{h.hobby || h}</li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default TemplateThree;
