import "./App.css";
// import { AuthProvider } from "./Contexts/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contacto from "./components/Contacto/Contacto";
import Inicio from "./components/Inicio/Inicio";
import Login from "./components/Login";
import Vacantes from "./vacantes/Vacantes";
import PageNotFound from "./components/PageNotFound";
import DetalleVacante from "./vacantes/DetalleVacante";
import Register from "./components/Register";
import { AuthProvider } from "./components/Auth";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route exact path="/" element={<Inicio />} />
            <Route path="/vacantes" element={<Vacantes />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/vacante/:id" element={<DetalleVacante />} />
            <Route exact path="/404" element={<PageNotFound />} />
            {/* <Navigate to="/404" /> */}
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
