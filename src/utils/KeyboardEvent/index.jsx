import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const KeyboardEvent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      const { key, ctrlKey } = e;
      if (
        (ctrlKey && key === "1") ||
        (ctrlKey && key === "2") ||
        (ctrlKey && key === "3") ||
        (ctrlKey && key === "4") ||
        (ctrlKey && key === "5") ||
        key === "Escape"
      )
        e.preventDefault();

      if (ctrlKey && key === "1") navigate("/skills");
      if (ctrlKey && key === "2") navigate("/projects");
      if (ctrlKey && key === "3") navigate("/educations");
      if (ctrlKey && key === "4") navigate("/certificates");
      if (ctrlKey && key === "5") navigate("/experiences");
      if (key === "Escape") navigate("/");
    });
  }, []);
};

export default KeyboardEvent;
