import { Routes, Route, Navigate } from "react-router-dom";
import BaseOutlet from "./layout/BaseOutlet";
import Educations from "./pages/Educations";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseOutlet />}>
        <Route index element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="educations" element={<Educations />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
