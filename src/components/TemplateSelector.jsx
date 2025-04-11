import React from 'react';

const TemplateSelector = ({ setTemplate }) => (
  <div className="mb-3">
    <label className="form-label">Choose Template</label>
    <select className="form-select" onChange={(e) => setTemplate(e.target.value)}>
      <option value="one">Template 1</option>
      <option value="two">Template 2</option>
      <option value="three">Template 3</option>
    </select>
  </div>
);

export default TemplateSelector;
