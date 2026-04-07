import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Story from './pages/Story';
import Product from './pages/Product';
import HowItsMade from './pages/HowItsMade';
import Materials from './pages/Materials';
import Mission from './pages/Mission';
import BackUs from './pages/BackUs';
import Retail from './pages/Retail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="story" element={<Story />} />
          <Route path="product" element={<Product />} />
          <Route path="how-its-made" element={<HowItsMade />} />
          <Route path="materials" element={<Materials />} />
          <Route path="mission" element={<Mission />} />
          <Route path="back-us" element={<BackUs />} />
          <Route path="retail" element={<Retail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
