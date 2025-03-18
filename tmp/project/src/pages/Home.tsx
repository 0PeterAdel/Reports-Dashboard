import React from 'react';

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'team', label: 'Team' },
  { id: 'about', label: 'About' }
];

export default function Home() {
  return (
    <div className="p-8">
      <div className="flex justify-center mb-8">
        <div className="nav-container">
          <nav className="nav-pills">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`nav-link ${tab.id === 'overview' ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Data-Dynamos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
            <p className="text-gray-600">
              Comprehensive data analysis and visualization platform for making informed business decisions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Total Reports</p>
                <p className="text-2xl font-bold text-blue-600">24</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Active Projects</p>
                <p className="text-2xl font-bold text-blue-600">8</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-3">
              <li className="text-gray-600">Data analysis report updated</li>
              <li className="text-gray-600">New visualization added</li>
              <li className="text-gray-600">Dataset cleaned and processed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}