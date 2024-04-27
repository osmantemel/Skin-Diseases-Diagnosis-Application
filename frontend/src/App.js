import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Fotoload from './Components/Fotoload';
import PieChartComponent from './Components/PieChart';
import Navbar from '../src/Components/Navbar';
import Footer from '../src/Components/Footer';
import Contact from '../src/Components/Screens/Contact'
import About from '../src/Components/Screens/About'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Fotoload />} />
          <Route path="/pie-chart" element={<PieChartComponent />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
