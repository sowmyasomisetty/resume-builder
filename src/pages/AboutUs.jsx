import React from 'react';

const AboutUs = () => (
  <div
    className="min-vh-100 d-flex justify-content-center align-items-center"
    style={{
      background: 'radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)',
      color: '#333',
      padding: '50px 20px',
    }}
  >
    <div className="container bg-transparent">
      <h2 className="text-center mb-4 fw-bold">About ResumeBuilder</h2>
      <p className="lead text-center">
        <strong>ResumeBuilder</strong> is a modern, user-friendly web application designed to help individuals craft
        professional, polished resumes in just a few clicks. Whether you're a student, fresher, experienced
        professional, or business executive, ResumeBuilder offers a wide range of customizable templates to suit your
        career path.
      </p>
      <p className="text-center">
        Our goal is to simplify the resume-building process by offering:
      </p>
      <ul className="list-group list-group-flush mb-4" style={{ backgroundColor: 'transparent' }}>
        <li className="list-group-item bg-transparent">✔ Easy-to-fill forms for entering your details</li>
        <li className="list-group-item bg-transparent">✔ Real-time previews to see how your resume looks</li>
        <li className="list-group-item bg-transparent">✔ Stylish templates that are ATS-friendly and employer-approved</li>
      </ul>
      <p className="text-center">
        At <strong>ResumeBuilder</strong>, we believe that everyone deserves the opportunity to make a great first
        impression. Your resume is your personal brand — and we’re here to make sure it stands out.
      </p>
      <h5 className="text-center fw-bold mt-4">Let your resume tell your story, professionally.</h5>
    </div>
  </div>
);

export default AboutUs;
