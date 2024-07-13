import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import OurVision from '../pages/OurVision';
import Header from './layout/Header';
import Footer from './layout/Footer';


function App() {
    return (
        <Router>
            <div className="App">
                <Header />

                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/our-vision" element={<OurVision />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
