import React, { useState } from 'react';
import ResumeForm from './ResumeForm';
import ResumePreview from './ResumePreview';

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
    profilePhoto: null,
    education: [],
    experience: [],
    projects: [],
    skills: [],
    hobbies: [],
    languages: [],
   });

  const [selectedTemplate, setSelectedTemplate] = useState('one'); // default template
  
  const [theme, setTheme] = useState({
    font: 'Arial',
    color: '#000',
    headingColor: '#007bff',
  });

  const handleFormDataChange = (updatedData) => {
    setFormData(updatedData);
  };

  return (
    <div className="container-fluid row">
      {/* Form Side */}
      <div className="col-md-6 p-3">
        <ResumeForm formData={formData} onFormDataChange={handleFormDataChange} />

        {/* Template Selector */}
        <div className="mt-4">
          <label className="form-label">Choose Template:</label>
          <select
            className="form-select"
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
          >
            <option value="">-- Select a template --</option>
            <option value="one">Template One</option>
            <option value="two">Template Two</option>
            <option value="three">Template Three</option>
          </select>
        </div>

        {/* Theme Selector (Optional) */}
        <div className="mt-3">
          <label className="form-label">Choose Theme Color:</label>
          <input
            type="color"
            className="form-control form-control-color"
            value={theme.headingColor}
            onChange={(e) =>
              setTheme((prev) => ({ ...prev, headingColor: e.target.value }))
            }
          />
        </div>
      </div>

      {/* Preview Side */}
      <div className="col-md-6 p-3 bg-light">
        <ResumePreview
          selectedTemplate={selectedTemplate}
          data={formData}
          theme={theme}
        />
      </div>
    </div>
  );
};

export default ResumeBuilder;
