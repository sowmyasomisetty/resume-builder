import React, { createContext, useState } from 'react';

export const ResumeContext1 = createContext();

export const ResumeProvider1 = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [theme, setTheme] = useState({
    font: 'Arial',
    color: '#000',
    headingColor: '#007bff'
  });
  const [selectedTemplate, setSelectedTemplate] = useState('one');

  return (
    <ResumeContext1.Provider
      value={{
        formData,
        setFormData,
        theme,
        setTheme,
        selectedTemplate,
        setSelectedTemplate
      }}
    >
      {children}
    </ResumeContext1.Provider>
  );
};
