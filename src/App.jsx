import { Routes, Route, Navigate } from "react-router-dom";
import BaseOutlet from "./layout/BaseOutlet";
import Educations from "./pages/Educations";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseOutlet />}>
        <Route index element={<Home />} />
        <Route path="educations" element={<Educations />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
