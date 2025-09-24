import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const Welcome = lazy(() => import('./Welcome'));
const ConstructionMaterialSupplies = lazy(() => import('./ConstructionMaterialSupplies'));
const EngineeringServices = lazy(() => import('./EngineeringServices'));
const Projects = lazy(() => import('./Projects'));
const About = lazy(() => import('./About'));
const Careers = lazy(() => import('./Careers'));
const Legal = lazy(() => import('./Legal'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="p-5 text-center">Loading…</div>}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/construction-material-supplies" element={<ConstructionMaterialSupplies />} />
          <Route path="/engineering-services" element={<EngineeringServices />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
