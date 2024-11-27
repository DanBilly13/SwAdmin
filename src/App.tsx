import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  Molecules,
  Typography,
  Colors,
  Templates,
  Tables,
  DataInput,
  Buttons,
  Navigation,
  Images,
  DataDisplay,
  Containers,
  Cards,
  Spacers,
} from './pages';
import { DesignSystemLayout } from './layouts/DesignSystemLayout';
import { BreakpointIndicator } from './components/atoms';

function App() {
  return (
    <Router>
      <BreakpointIndicator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<DesignSystemLayout />}>
          <Route path="/molecules" element={<Molecules />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/data-input" element={<DataInput />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/images" element={<Images />} />
          <Route path="/data-display" element={<DataDisplay />} />
          <Route path="/containers" element={<Containers />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/spacers" element={<Spacers />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
