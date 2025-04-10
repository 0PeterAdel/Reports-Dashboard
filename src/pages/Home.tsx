import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'team', label: 'Team' },
  { id: 'about', label: 'About' }
];

const teamMembers = [
  {
    name: 'Ahmed Emad Habib',
    role: 'Data Analyst Expert',
    image: '/public/assets/teams/MM.jpg',
    portfolio: 'https://www.linkedin.com/in/ahmed-emad-730b12273'
  },
  {
    name: 'Peter Rafat Adel',
    role: 'Data Analyst Expert',
    image: '/public/assets/teams/peter.jpg',
    portfolio: 'https://peteradel.netlify.app'
  },
  {
    name: 'Mohammed Elhossiny',
    role: 'Data Analyst Expert',
    image: '/public/assets/teams/medoo.JPG',
    portfolio: 'https://emily-rodriguez.com'
  },
  {
    name: 'Mohammed Amgad',
    role: 'Data Analyst Expert',
    image: '/public/assets/teams/mohamed.jpg',
    portfolio: 'https://mamgdofficial.wixsite.com/mohammed-amgd-1'
  },
  {
    name: 'Zyad Sameh Mohamed',
    role: 'Data Analyst Expert',
    image: '/public/assets/teams/zezo.jpg',
    portfolio: 'https://www.linkedin.com/in/zyad-sameh-mohamed-47578b2b7'
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'team':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <a
                  href={member.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Portfolio
                </a>
              </div>
            ))}
          </div>
        );
      case 'about':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-600 mb-4">
            Welcome to the Human Resources Dataset Analysis project!
            This project aims to explore and analyze HR-related data to uncover valuable insights, provide actionable recommendations, and build visualizations to support decision-making within an organization.
            </p>
          </div>
        );
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
              <p className="text-gray-600 mb-4">
                Comprehensive data analysis and visualization platform for making informed business decisions.
              </p>
              <a
                href="https://github.com/0PeterAdel/Data-Dyanamos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
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
        );
    }
  };

  return (
    <div className="p-8">
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

      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Data-Dynamos</h1>
        {renderContent()}
      </div>
    </div>
  );
}