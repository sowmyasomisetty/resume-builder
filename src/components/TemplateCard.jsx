import React from 'react';
import { useNavigate } from 'react-router-dom';

const TemplateCard = ({ title, path }) => {
  const navigate = useNavigate();

  const handleSelect = () => {
    navigate(path);
  };

  return (
    <div className="card shadow-sm p-3">
      <h5>{title}</h5>
      <button className="btn btn-outline-primary mt-2" onClick={handleSelect}>Choose</button>
    </div>
  );
};

export default TemplateCard;
