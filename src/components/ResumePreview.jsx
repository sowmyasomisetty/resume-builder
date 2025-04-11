import React from 'react';
import TemplateOne from '../templates/TemplateOne';
import TemplateTwo from '../templates/TemplateTwo';
import TemplateThree from '../templates/TemplateThree';

const ResumePreview = ({ selectedTemplate, data, theme }) => {
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'one':
        return <TemplateOne data={data} theme={theme} />;
      case 'two':
        return <TemplateTwo data={data} theme={theme} />;
      case 'three':
        return <TemplateThree data={data} theme={theme} />;
      default:
        return <p className="text-danger">Please select a template to preview.</p>;
    }
  };

  return (
    <div className="resume-preview border p-3 rounded mt-3 bg-white">
      <div className="row">
        <div className="col-12">{renderTemplate()}</div>
      </div>
    </div>
  );
};

export default ResumePreview;