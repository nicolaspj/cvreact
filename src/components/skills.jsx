function Skills() {
  return (
    <div class="container ">
      <div class="grid text-center">
        <p class="d-inline-flex gap-1">
          <button
            class="btn btn-primary"
            data-bs-toggle="collapse"
            href="#multiCollapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample1"
          >
            Contactos
          </button>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multiCollapseExample2"
            aria-expanded="false"
            aria-controls="multiCollapseExample2"
          >
            Skills Backend
          </button>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multiCollapseExample3"
            aria-expanded="false"
            aria-controls="multiCollapseExample3"
          >
            Skills Frontend
          </button>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multiCollapseExample4"
            aria-expanded="false"
            aria-controls="multiCollapseExample4"
          >
            Estudios
          </button>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multiCollapseExample5"
            aria-expanded="false"
            aria-controls="multiCollapseExample5"
          >
            Idiomas
          </button>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".multi-collapse"
            aria-expanded="false"
            aria-controls="multiCollapseExample1 multiCollapseExample2 multiCollapseExample3 multiCollapseExample4 multiCollapseExample5"
          >
            Mostrar todo
          </button>
        </p>
        <div class="row">
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample1">
              <div class="card card-body">
                <pre>
                  <i class="bi bi-envelope-at-fill"></i>
                  cardozo.j.nicolas@gmail.com
                </pre>
                <pre>
                  <i class="bi bi-linkedin">
                    <a href="https://www.linkedin.com/in/nicolas-cardozo-419631192/">
                      https://www.linkedin.com/in/nicolas-cardozo-419631192/
                    </a>
                  </i>
                </pre>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample2">
              <div class="card card-body">
                <pre>
                  <p class="text-center">
                    <i class="bi bi-pc-display"></i>
                    Skills Backend
                  </p>
                  <p class="text-center">
                    PHP , JS, SQL , MYSQL ,GIT, <br />
                    POSTMAN,APACHE,LINUX, <br />
                    CONTINUO APRENDIZAJE
                    <br />
                  </p>
                </pre>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample3">
              <div class="card card-body">
                <p p class="text-center">
                  <i class="bi bi-pc-display"></i>Skills Frontend
                  <br />
                  Html ,css , JS , bootstrap, <br />
                  continuo aprendizaje
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample4">
              <div class="card card-body">
                <p class="text-center">
                  <i class="bi bi-eyeglasses"></i>.Estudios
                  <pre>PHP arquitectura avanzada(Educaci&#243;n IT)</pre>
                  <pre>
                    .Programaci&#243;n web con PHP y Mysql (Educacion IT)
                  </pre>
                  <pre>.Linux Sysadmin(Educacion IT)</pre>
                  <pre>.Programaci&#243;n Web con Javascript(UTN FRRe)</pre>
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample5">
              <div class="card card-body">
                <p class="text-center">
                  <i class="bi bi-megaphone"></i>Idiomas
                  <br />
                  Ingl&#233;s: Escritura y Lectura - B2
                  <br />
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
