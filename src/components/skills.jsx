function Skills() {
  return (
    <div className="container ">
      <div className="grid text-center">
        <p className="d-inline-flex gap-1">
          <button
            className="btn btn-primary"
            data-bs-toggle="collapse"
            href="#multiCollapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample1"
          >
            Contactos
          </button>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multiCollapseExample2"
            aria-expanded="false"
            aria-controls="multiCollapseExample2"
          >
            Skills Backend
          </button>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multiCollapseExample3"
            aria-expanded="false"
            aria-controls="multiCollapseExample3"
          >
            Skills Frontend
          </button>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multiCollapseExample4"
            aria-expanded="false"
            aria-controls="multiCollapseExample4"
          >
            Estudios
          </button>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multiCollapseExample5"
            aria-expanded="false"
            aria-controls="multiCollapseExample5"
          >
            Idiomas
          </button>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".multi-collapse"
            aria-expanded="false"
            aria-controls="multiCollapseExample1 multiCollapseExample2 multiCollapseExample3 multiCollapseExample4 multiCollapseExample5"
          >
            Mostrar todo
          </button>
        </p>
        <div className="row">
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample1">
              <div className="card card-body">
                <i className="bi bi-envelope-at-fill ms-3"></i>
                <p>cardozo.j.nicolas@gmail.com</p>
                <p>
                  <i className="bi bi-linkedin ms-3">
                    <a href="https://www.linkedin.com/in/nicolas-cardozo-419631192/">
                      https://www.linkedin.com/in/nicolas-cardozo-419631192/
                    </a>
                  </i>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample2">
              <div className="card card-body">
                <i className="bi bi-pc-display"></i>
                <p className="text-center">Skills Backend</p>
                <p className="text-center">
                  PHP , JS, SQL , MYSQL ,GIT, <br />
                  POSTMAN,APACHE,LINUX, <br />
                  CONTINUO APRENDIZAJE
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample3">
              <div className="card card-body">
                <div className="text-center">
                  <i className="bi bi-pc-display"></i>
                  <p className="text-center">Skills Frontend</p>
                  <p>
                    Html ,css , JS , bootstrap, <br />
                    continuo aprendizaje
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample4">
              <div className="card card-body">
                <div className="text-center">
                  <i className="bi bi-eyeglasses"></i>
                  <p>Estudios</p>
                  <p>PHP arquitectura avanzada(Educaci&#243;n IT)</p>
                  <p>.Programaci&#243;n web con PHP y Mysql (Educacion IT)</p>
                  <p>.Linux Sysadmin(Educacion IT)</p>
                  <p>.Programaci&#243;n Web con Javascript(UTN FRRe)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample5">
              <div className="card card-body">
                <p className="text-center">
                  <i className="bi bi-megaphone"></i>
                  <p>Idiomas</p>
                  Ingl&#233;s: Escritura y Lectura - B2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
