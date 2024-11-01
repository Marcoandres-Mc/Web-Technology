import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Register from './pages/Register';
import Phones from './Components/Products/Phones';
import Computing from './Components/Products/Computing';
import Gaming from './Components/Products/Gaming';
import Pccomps from './Components/Products/Pccomps';
import Location from './pages/Locations';
import Locations from './pages/Locations';
import DetailsProducts from './Components/Products/DetailsProducts';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas que NO usan Header y Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas que SÍ usan Header y Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/contactanos" element={<ContactUs />} />
          <Route path="/sedes" element={<Locations />} />
          <Route path="/computacion" element={<Computing />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/pc" element={<Pccomps />} />
          <Route path="/Details" element={<DetailsProducts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

// Layout con Header y Footer
const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <Outlet /> {/* Aquí se renderizan las rutas hijas */}
      </main>
      <Footer />
    </>
  );
};

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