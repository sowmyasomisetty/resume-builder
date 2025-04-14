import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResumeContext1 } from '../context1/ResumeContext1';

const FormPage = () => {
  const { formData, setFormData } = useContext(ResumeContext1);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (section, index, field, value) => {
    const updatedSection = [...(formData[section] || [])];
  
    // Check if section is an array of strings
    if (['skills', 'languages', 'hobbies'].includes(section)) {
      updatedSection[index] = value; // Just assign the string directly
    } else {
      updatedSection[index] = { ...updatedSection[index], [field]: value }; // For object arrays
    }
  
    setFormData(prev => ({ ...prev, [section]: updatedSection }));
  };
  

  const addSectionItem = (section, defaultItem = {}) => {
    setFormData(prev => ({
      ...prev,
      [section]: [...(prev[section] || []), defaultItem]
    }));
  };

  const removeSectionItem = (section, index) => {
    const updatedSection = [...(formData[section] || [])];
    updatedSection.splice(index, 1);
    setFormData(prev => ({ ...prev, [section]: updatedSection }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/template-selection');
  };

  return (
    <div className='bg-dark text-white'>
      <div className="container mx-4 ">
        <h2>Resume Details Form</h2>
        <form onSubmit={handleSubmit}>

          {/* Basic Info */}
          <div className="mb-3 col-4">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name || ''}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 col-4">
            <label>Email:</label>
            <input type="email" name="email" className="form-control" value={formData.email || ''} onChange={handleChange} />
          </div>
          <div className="mb-3 col-4">
            <label>Summary:</label>
            <textarea name="summary" className="form-control" value={formData.summary || ''} onChange={handleChange} />
          </div>

          {/* profile photo section */}
          <div className="mb-3 col-4">
            <label>Upload Profile Photo:</label>
              <input
                type="file"
                accept="image/*"
                className="form-control"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setFormData((prev) => ({
                        ...prev,
                        profilePhoto: reader.result 
                      }));
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
          </div>

          {/* Education Section */}
          <h4>Education</h4>
          {(formData.education || []).map((edu, index) => (
            <div key={index} className="border p-3 mb-3 col-4">
              <input placeholder="Qualification" className="form-control mb-2"
                value={edu.qualification || ''} onChange={e => handleArrayChange('education', index, 'qualification', e.target.value)} />
              <input placeholder="College Name" className="form-control mb-2"
                value={edu.college || ''} onChange={e => handleArrayChange('education', index, 'college', e.target.value)} />
              <input placeholder="Passout Year" className="form-control mb-2"
                value={edu.year || ''} onChange={e => handleArrayChange('education', index, 'year', e.target.value)} />
              <input placeholder="Percentage" className="form-control mb-2"
                value={edu.percentage || ''} onChange={e => handleArrayChange('education', index, 'percentage', e.target.value)} />
              <button type="button" className="btn btn-danger" onClick={() => removeSectionItem('education', index)}>Remove</button>
            </div>
          ))}
          <button type="button" className="btn btn-primary mb-4" onClick={() => addSectionItem('education', {})}>+ Add Education</button>

          {/* Experience Section */}
          <h4>Experience</h4>
          {(formData.experience || []).map((exp, index) => (
            <div key={index} className="border p-3 mb-3 col-4">
              <input placeholder="Company Name" className="form-control mb-2"
                value={exp.company || ''} onChange={e => handleArrayChange('experience', index, 'company', e.target.value)} />
              <input placeholder="Title" className="form-control mb-2"
                value={exp.title || ''} onChange={e => handleArrayChange('experience', index, 'title', e.target.value)} />
              <input placeholder="From (e.g. Jan 2020)" className="form-control mb-2"
                value={exp.from || ''} onChange={e => handleArrayChange('experience', index, 'from', e.target.value)} />
              <input placeholder="To (e.g. Dec 2021 or Present)" className="form-control mb-2"
                value={exp.to || ''} onChange={e => handleArrayChange('experience', index, 'to', e.target.value)} />
              <textarea placeholder="Achievements/Tasks" className="form-control mb-2"
                value={exp.tasks || ''} onChange={e => handleArrayChange('experience', index, 'tasks', e.target.value)} />
              <button type="button" className="btn btn-danger" onClick={() => removeSectionItem('experience', index)}>Remove</button>
            </div>
          ))}
          <button type="button" className="btn btn-primary mb-4" onClick={() => addSectionItem('experience', {})}>+ Add Experience</button>

          {/* Projects */}
          <h4>Projects</h4>
          {(formData.projects || []).map((proj, index) => (
            <div key={index} className="border p-3 mb-3 col-4">
              <input placeholder="Project Title" className="form-control mb-2"
                value={proj.projectName || ''} onChange={e => handleArrayChange('projects', index, 'projectName', e.target.value)} />
              <input placeholder="From (e.g. Jan 2020)" className="form-control mb-2"
                value={proj.from || ''} onChange={e => handleArrayChange('projects', index, 'from', e.target.value)} />
              <input placeholder="To (e.g. Dec 2021 or Present)" className="form-control mb-2"
                value={proj.to || ''} onChange={e => handleArrayChange('projects', index, 'to', e.target.value)} />
              <textarea placeholder="Description" className="form-control mb-2"
                value={proj.description || ''} onChange={e => handleArrayChange('projects', index, 'description', e.target.value)} />
              <input placeholder="URL" className="form-control mb-2"
                value={proj.projectUrl || ''} onChange={e => handleArrayChange('projects', index, 'projectUrl', e.target.value)} />
              <button type="button" className="btn btn-danger" onClick={() => removeSectionItem('projects', index)}>Remove</button>
            </div>
          ))}
          <button type="button" className="btn btn-primary mb-4" onClick={() => addSectionItem('projects', {})}>+ Add Project</button>

          {/* Skills */}
          <h4>Skills</h4>
          {(formData.skills || []).map((skill, index) => (
            <div key={index} className="d-flex mb-2 col-4">
              <input className="form-control me-2" value={skill} onChange={e => handleArrayChange('skills', index, '', e.target.value)} />
              <button type="button" className="btn btn-danger" onClick={() => removeSectionItem('skills', index)}>Remove</button>
            </div>
          ))}
          <button type="button" className="btn btn-primary mb-4" onClick={() => addSectionItem('skills', '')}>+ Add Skill</button>

          {/* Languages */}
          <h4>Languages</h4>
          {(formData.languages || []).map((lang, index) => (
            <div key={index} className="d-flex mb-2 col-4">
              <input className="form-control me-2" value={lang} onChange={e => handleArrayChange('languages', index, '', e.target.value)} />
              <button type="button" className="btn btn-danger" onClick={() => removeSectionItem('languages', index)}>Remove</button>
            </div>
          ))}
          <button type="button" className="btn btn-primary mb-4" onClick={() => addSectionItem('languages', '')}>+ Add Language</button>

          {/* Hobbies */}
          <h4>Hobbies</h4>
          {(formData.hobbies || []).map((hob, index) => (
            <div key={index} className="d-flex mb-2 col-4">
              <input className="form-control me-2" value={hob} onChange={e => handleArrayChange('hobbies', index, '', e.target.value)} />
              <button type="button" className="btn btn-danger" onClick={() => removeSectionItem('hobbies', index)}>Remove</button>
            </div>
          ))}
          <button type="button" className="btn btn-primary mb-4" onClick={() => addSectionItem('hobbies', '')}>+ Add Hobby</button>
          <div className="d-flex justify-content-center mt-4">
            <button type="submit" className="btn btn-success">
              Proceed to template selection
            </button>
          </div>

        </form>
      </div>
    </div>
    
  );
};

export default FormPage;
