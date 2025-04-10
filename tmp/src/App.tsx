import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import DataSet from './pages/DataSet';
import Contact from './pages/Contact';
import DataForecasting from './pages/DataForecasting';
import DataMining from './pages/DataMining';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="data-forecasting" element={<DataForecasting />} />
          <Route path="data-mining" element={<DataMining />} />
          <Route path="reports" element={<Reports />} />
          <Route path="data-set" element={<DataSet />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;