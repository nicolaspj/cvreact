import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Skills from "./components/skills";
import Aboutme from "./components/aboutme";
function App() {
  return (
    <>
      <Navbar />
      <Aboutme />
      <Skills />
    </>
  );
}

export default App;
