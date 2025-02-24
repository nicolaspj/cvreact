import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Skills from "./components/skills";
import Aboutme from "./components/Aboutme";
import AboutmeEn from "./components/AboutmeEn";

function App() {
  return (
    <Router>
      {" "}
      {/* 👈 Envuelve todo en <Router> */}
      <Navbar /> {/* Navbar dentro de <Router> */}
      <Routes>
        {" "}
        {/* 👈 <Routes> debe envolver <Route> */}
        <Route path="/cvreact" element={<Aboutme />} />
        <Route path="/AboutmeEn" element={<AboutmeEn />} />
      </Routes>
      <Skills />{" "}
      {/* Skills también dentro de <Router>, pero fuera de <Routes> */}
    </Router>
  );
}

export default App;
