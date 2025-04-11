import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResumeContext1 } from '../context1/ResumeContext1';

const TemplateSelectionPage = () => {
  const { selectedTemplate, setSelectedTemplate } = useContext(ResumeContext1);
  const navigate = useNavigate();

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    navigate('/resume-preview');
  };

  return (
    <div className="container mt-5">
      <h2>Select a Resume Template</h2>
      <div className="d-flex gap-3 mt-4">
        <button className="btn btn-outline-primary" onClick={() => handleTemplateSelect('one')}>
          Fresher Template
        </button>
        <button className="btn btn-outline-success" onClick={() => handleTemplateSelect('two')}>
          Professional Template
        </button>
        <button className="btn btn-outline-info" onClick={() => handleTemplateSelect('three')}>
          Business Template 
        </button>
      </div>
    </div>
  );
};

export default TemplateSelectionPage;
