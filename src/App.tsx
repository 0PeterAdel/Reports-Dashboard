import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import MarketResearch from './pages/MarketResearch';
import Reports from './pages/Reports';
import DataSet from './pages/DataSet';
import Contact from './pages/Contact';
import DataForecasting from './pages/DataForecasting';
import DataMining from './pages/DataMining';
import DecisionMaking from './pages/DecisionMaking';
import Chat from './pages/Chat';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="data-forecasting" element={<DataForecasting />} />
          <Route path="data-mining" element={<DataMining />} />
          <Route path="decision-making" element={<DecisionMaking />} />
          <Route path="market-research" element={<MarketResearch />} />
          <Route path="reports" element={<Reports />} />
          <Route path="data-set" element={<DataSet />} />
          <Route path="chat" element={<Chat />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;