import { Routes, Route, Navigate } from "react-router-dom";
import BaseOutlet from "./layout/BaseOutlet";
import Certificates from "./pages/Certificates";
import Educations from "./pages/Educations";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experiences from "./pages/Experiences";
import KeyboardEvent from "./utils/KeyboardEvent";

export default function App() {
  KeyboardEvent();
  return (
    <Routes>
      <Route path="/" element={<BaseOutlet />}>
        <Route index element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="educations" element={<Educations />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="experiences" element={<Experiences />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
