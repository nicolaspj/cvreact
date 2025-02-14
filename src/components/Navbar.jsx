function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Desarrollador FullStack
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
