import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import ContactUs from './pages/ContactUs';
import Locations from './pages/Locations';
import Computing from './Components/Products/Computing';
import Phones from './Components/Products/Phones';
import Gaming from './Components/Products/Gaming';
import Pccomps from './Components/Products/Pccomps';
import AboutUs from './pages/AboutUs';
import DetallesProducto from './Components/Products/DetallesProducto';

const Home = () => {


    return (
        <>
            <Header />      
                <Routes>
                    <Route path="*" element={<AboutUs />} />
                    <Route path="/productos/computacion" element={<Computing />} />
                    <Route path="/productos/phones" element={<Phones />} />
                    <Route path="/productos/gaming" element={<Gaming />} />
                    <Route path="/productos/pc" element={<Pccomps />} />

                    <Route path="/producto/detalles/:id/:nombre/:descripcion/:precio/:img" element={<DetallesProducto />} />
                    
                    <Route path="/contactanos" element={<ContactUs />} />
                    <Route path="/sedes" element={<Locations />} />

                </Routes>

            <Footer />
            
        </>
        
    );
};

export default Home;