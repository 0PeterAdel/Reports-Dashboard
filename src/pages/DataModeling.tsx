import React, { useState } from 'react';
import { FileText } from 'lucide-react';

const tabs = [
  { id: 'erd1', label: 'ERD 1' },
  { id: 'erd2', label: 'ERD 2' },
];

export default function DataModeling() {
  const [activeTab, setActiveTab] = useState('erd1');

  const renderContent = () => {
    switch (activeTab) {
      case 'erd1':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Entity Relationship Diagram 1</h2>
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1200&h=800"
                alt="ERD Diagram 1"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        );
      case 'erd2':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Entity Relationship Diagram 2</h2>
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=800"
                alt="ERD Diagram 2"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Data Modeling</h1>

      <div className="flex justify-center mb-8">
        <div className="nav-container">
          <nav className="nav-pills">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`nav-link ${tab.id === activeTab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {renderContent()}
    </div>
  );
}