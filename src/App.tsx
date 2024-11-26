import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  Components,
  Molecules,
  Typography,
  Colors,
  Templates,
  Atoms,
  Tables,
} from './pages';
import { DesignSystemLayout } from './layouts/DesignSystemLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<DesignSystemLayout />}>
          <Route path="/atoms" element={<Atoms />} />
          <Route path="/molecules" element={<Molecules />} />
          <Route path="/components" element={<Components />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/templates" element={<Templates />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
