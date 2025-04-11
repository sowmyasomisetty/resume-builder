import React, { useState } from "react";

const ResumeForm = ({ formData, onFormDataChange }) => {
  const [localData, setLocalData] = useState(formData || {
    name: "",
    email: "",
    phone: "",
    summary: "",
    profilePhoto: null,
    education: [],
    experience: [],
    projects: [],
    skills: [],
    hobbies: [],
    languages: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...localData, [name]: value };
    setLocalData(updated);
    onFormDataChange(updated);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const updated = { ...localData, profilePhoto: reader.result };
      setLocalData(updated);
      onFormDataChange(updated);
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleAdd = (section, item) => {
    const updated = {
      ...localData,
      [section]: [...localData[section], item],
    };
    setLocalData(updated);
    onFormDataChange(updated);
  };

  const handleRemove = (section, index) => {
    const updatedSection = localData[section].filter((_, i) => i !== index);
    const updated = {
      ...localData,
      [section]: updatedSection,
    };
    setLocalData(updated);
    onFormDataChange(updated);
  };

  const renderList = (section, fields, label) => (
    <>
      <h5>{label}</h5>
      {localData[section].map((item, index) => (
        <div className="border p-2 mb-2" key={index}>
          {fields.map((f) => (
            <div key={f.name}>
              <label>{f.label}</label>
              <input
                className="form-control mb-2"
                type="text"
                value={item[f.name]}
                onChange={(e) => {
                  const updated = [...localData[section]];
                  updated[index][f.name] = e.target.value;
                  const newData = { ...localData, [section]: updated };
                  setLocalData(newData);
                  onFormDataChange(newData);
                }}
              />
            </div>
          ))}
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleRemove(section, index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        className="btn btn-primary btn-sm mb-3"
        onClick={() =>
          handleAdd(
            section,
            fields.reduce((obj, f) => ({ ...obj, [f.name]: "" }), {})
          )
        }
      >
        Add {label}
      </button>
    </>
  );

  return (
    <div>
      <h4>Basic Info</h4>
      <div className="mb-3">
        <label>Name</label>
        <input
          className="form-control"
          name="name"
          value={localData.name}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label>Email</label>
        <input
          className="form-control"
          name="email"
          value={localData.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label>Phone</label>
        <input
          className="form-control"
          name="phone"
          value={localData.phone}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label>Summary</label>
        <textarea
          className="form-control"
          name="summary"
          rows="3"
          value={localData.summary}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label>Profile Photo</label>
        <input
          type="file"
          className="form-control"
          accept="image/*"
          onChange={handlePhotoUpload}
        />
      </div>

      <hr />

      {renderList("education", [
        { name: "qualification", label: "Qualification" },
        { name: "college", label: "College Name" },
        { name: "percentage", label: "Percentage" },
        { name: "year", label: "Year of Passing" },
      ], "Education")}

      <hr />

      {renderList("experience", [
        { name: "company", label: "Company Name" },
        { name: "title", label: "Title" },
        { name: "from", label: "From" },
        { name: "to", label: "To" },
        { name: "tasks", label: "Achievements/Tasks" },
      ], "Experience")}

      <hr />

      {renderList("projects", [
        { name: "projectName", label: "Project Name" },
        { name: "from", label: "From" },
        { name: "to", label: "To" },
        { name: "description", label: "Description" },
        { name: "projectUrl", label: "Project URL" },
      ], "Projects")}

      <hr />

      {renderList("skills", [{ name: "skill", label: "Skill" }], "Skills")}
      <hr />
      {renderList("hobbies", [{ name: "hobby", label: "Hobby" }], "Hobbies")}
      <hr />
      {renderList("languages", [{ name: "language", label: "Language" }], "Languages Known")}
    </div>
  );
};

export default ResumeForm;
