import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';


import Home from './Home'
import { AuthProvider } from './Contexts/AuthContext';
import { CarritoProvider } from './Contexts/CarritoContext';


const App = () => {
  return (
    <AuthProvider>
      <CarritoProvider>  
        <Router>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home/*" element={
              <Home />
              }/>
          </Routes>
        </Router>
      </CarritoProvider> 
    </AuthProvider>
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