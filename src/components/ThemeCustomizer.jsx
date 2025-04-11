import React from 'react';

const ThemeCustomizer = ({ setTheme }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTheme(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mb-3">
      <label className="form-label">Font Style</label>
      <select name="font" className="form-select mb-2" onChange={handleChange}>
        <option value="Arial">Arial</option>
        <option value="Georgia">Georgia</option>
        <option value="Courier New">Courier New</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Trebuchet MS">Trebuchet MS</option>
        <option value="Verdana">Verdana</option>
        <option value="Tahoma">Tahoma</option>
        <option value="Lucida Console">Lucida Console</option>
        <option value="Garamond">Garamond</option>
        <option value="Impact">Impact</option>
      </select>

      <label className="form-label">Text Color</label>
      <input name="color" type="color" className="form-control form-control-color mb-2" onChange={handleChange} />

      <label className="form-label">Heading Color</label>
      <input name="headingColor" type="color" className="form-control form-control-color" onChange={handleChange} />
    </div>
  );
};

export default ThemeCustomizer;
