import React,{useContext} from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ResumePreview from './components/ResumePreview';

import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import FormPage from './pages/FormPage';
import TemplateSelectionPage from './pages/TemplateSelectionPage';

import { ResumeProvider1, ResumeContext1 } from './context1/ResumeContext1';

import "/node_modules/bootstrap/dist/css/bootstrap.css";

const ResumePreviewWrapper = () => {
  const { selectedTemplate, formData, theme } = useContext(ResumeContext1);

  return (
    <ResumePreview
      selectedTemplate={selectedTemplate}
      data={formData}
      theme={theme}
    />
  );
};

const App = () => {
  return (
    <ResumeProvider1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/template-selection" element={<TemplateSelectionPage />} />
        <Route path="/resume-preview" element={<ResumePreviewWrapper />} />
      </Routes>
    </ResumeProvider1>
  );
};

export default App;
