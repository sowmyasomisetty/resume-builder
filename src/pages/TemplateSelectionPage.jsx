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
    <div className="container mt-5 pt-5">
      <h2 className="mb-4">Select a Resume Template</h2>
      <div className="d-flex flex-wrap gap-3">
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
