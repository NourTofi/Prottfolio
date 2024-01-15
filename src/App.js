import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homeSections/Home";
import Projects from "./pages/projectsSections/Projects";
import Contact from "./pages/contactSections/Contact";
import "aos/dist/aos.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
