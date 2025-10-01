import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './App.css';

// Import pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);
  return null;
}

// Language wrapper component for SEO-friendly URLs
function LanguageWrapper({ children }) {
  const { i18n } = useTranslation();
  const { lang } = useParams();
  
  useEffect(() => {
    if (lang && ['sq', 'mk', 'en'].includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);
  
  return children;
}

function App() {
  return (
    <Router basename="/Hoxha-engineering">
      <ScrollToTop />
      <div className="App">
        <Routes>
          {/* Default route redirects to Albanian */}
          <Route path="/" element={<LanguageWrapper><Home /></LanguageWrapper>} />
          
          {/* Language-specific routes for SEO */}
          <Route path="/:lang" element={<LanguageWrapper><Home /></LanguageWrapper>} />
          <Route path="/:lang/projects" element={<LanguageWrapper><Projects /></LanguageWrapper>} />
          <Route path="/:lang/services" element={<LanguageWrapper><Services /></LanguageWrapper>} />
          <Route path="/:lang/about" element={<LanguageWrapper><About /></LanguageWrapper>} />
          <Route path="/:lang/contact" element={<LanguageWrapper><Contact /></LanguageWrapper>} />
          
          {/* Fallback routes without language prefix */}
          <Route path="/projects" element={<LanguageWrapper><Projects /></LanguageWrapper>} />
          <Route path="/services" element={<LanguageWrapper><Services /></LanguageWrapper>} />
          <Route path="/about" element={<LanguageWrapper><About /></LanguageWrapper>} />
          <Route path="/contact" element={<LanguageWrapper><Contact /></LanguageWrapper>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
