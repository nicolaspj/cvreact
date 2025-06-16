import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isEnglish, setIsEnglish] = useState(true); // Estado para controlar el idioma
  const navigate = useNavigate(); // Navegación

  // Función para manejar el cambio de idioma
  const handleLanguageToggle = (language) => {
    if (language === "EN") {
      setIsEnglish(true); // Muestra el botón "ES"
      navigate("/AboutmeEn"); // Cambia la ruta a "AboutmeEn"
    } else {
      setIsEnglish(false); // Muestra el botón "EN"
      navigate("/cvreact"); // Cambia la ruta a "cvreact"
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          FullStack Developer
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-md-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {/* Botón EN: Condicionalmente ocultado */}
            <li className="nav-item">
              <button
                type="button"
                className={`btn btn-outline-light btn-lg ${
                  isEnglish ? "d-none" : ""
                }`}
                onClick={() => handleLanguageToggle("EN")}
              >
                EN
              </button>
            </li>

            {/* Botón ES: Condicionalmente ocultado */}
            <li className="nav-item">
              <button
                type="button"
                className={`btn btn-outline-light btn-lg ${
                  !isEnglish ? "d-none" : ""
                }`}
                onClick={() => handleLanguageToggle("ES")}
              >
                ES
              </button>
            </li>
            <li> </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-outline-light btn-lg"
                onClick={() =>
                  descargarArchivo(
                    "./Archivo/NicolasCardozo.pdf",
                    "NicolasCardozo.pdf"
                  )
                }
              >
                Descargar CV
              </button>
            </li>
            <li className="nav-item">
                <a
                  href="https://nicolaspj.github.io/landing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light btn-lg"
                >
                Landing Page
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function descargarArchivo(url, nombreArchivo) {
  var link = document.createElement("a");
  link.href = url;
  link.download = nombreArchivo;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  alert("!! Gracias por su consideración ¡¡");
}

export default Navbar;
