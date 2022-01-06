import "./App.css";
import MenuHeader from "./MenuHeader/MenuHeader";
import SobreMi from "./SobreMi/SobreMi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Proyectos from "./Proyectos/Proyectos";
import Contacto from "./Contacto/Contacto";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Wrapper">
          <MenuHeader />
          <div className="Cuerpo">
            <Routes>
              <Route path="/" element={<SobreMi />} />
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
