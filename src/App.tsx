import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { MenuProvider } from "./contexts/MenuContext";
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
  TextBlocks,
  CodeBlocks,
  User,
  Users,
  Account,
  Lagroller,
  Foljande,
  InlaggOchKommentarer,
  InskickadeRapporter,
  Inkop,
  Behorighet,
} from "./pages";
import { DesignSystemLayout } from "./layouts/DesignSystemLayout";
import { AnvandareLayout } from "./layouts/AnvandareLayout";
import { BreakpointIndicator } from "./components/atoms";

function App() {
  return (
    <MenuProvider>
      <Router>
        <BreakpointIndicator />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Design System Routes */}
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
            <Route path="/text-blocks" element={<TextBlocks />} />
            <Route path="/code-blocks" element={<CodeBlocks />} />
          </Route>

          {/* Användare Routes */}
          <Route element={<AnvandareLayout />}>
            <Route path="/anvandare" element={<User />} />
            <Route path="/anvandare/users" element={<Users />} />
            <Route path="/anvandare/account" element={<Account />} />
            <Route path="/anvandare/lagroller" element={<Lagroller />} />
            <Route path="/anvandare/foljande" element={<Foljande />} />
            <Route path="/anvandare/inlagg-och-kommentarer" element={<InlaggOchKommentarer />} />
            <Route path="/anvandare/inskickade-rapporter" element={<InskickadeRapporter />} />
            <Route path="/anvandare/inkop" element={<Inkop />} />
            <Route path="/anvandare/behorighet" element={<Behorighet />} />
          </Route>
        </Routes>
      </Router>
    </MenuProvider>
  );
}

export default App;
