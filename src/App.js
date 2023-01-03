import { Crear } from "./components/Crear";
import { Buscador } from "./components/Buscador";
import { Listado } from "./components/Listado";
import { useState } from "react";


function App() {

    const [listadoState, setListadoState] = useState([]);

    return (
      <div className="layout">
          {/* <!--Cabecera--> */}
          <header className="header">
              <div className="logo">
                  <div className="play"></div>
              </div>

              <h1>MisPelis</h1>
          </header>

         {/*  <!--Barra de navegación--> */}
          <nav className="nav">
              <ul>
                  <li><a href="#">Inicio</a></li>
                  <li><a href="#">Peliculas</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contacto</a></li>
              </ul>
          </nav>

         {/*  <!--Contenido principal--> */}
          <section id="content" className="content">
            <Listado listadoState={listadoState} setListadoState= {setListadoState}/>
          </section>

          {/* <!--Barra lateral--> */}
          <aside className="lateral">
              <Buscador listadoState={listadoState} setListadoState= {setListadoState}/>
              <Crear setListadoState={setListadoState}/>
          </aside>

          <footer className="footer">
              &copy;  - <a href="https://TecnoSue">TecnoSue</a>
          </footer>

      </div>

    );
}

export default App;
