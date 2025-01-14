import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import { Navigate } from 'react-router-dom';
import ResumenCompra from './pages/ResumenCompra';

import Home from './Home'

const App = () => {
  return (
          <Router>
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/resumenCompra" element={<ResumenCompra />} />
              <Route path="/home/*" element={
                <Home />
              } />
            </Routes>
          </Router>

  );
};

// Layout con Header y Footer


// Componente para manejar rutas no encontradas
const NotFound = () => {
  return (
    <div>
      <h2>404 - Página No Encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
    </div>
  );
};

export default App;