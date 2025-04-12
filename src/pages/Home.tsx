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
    image: '/assets/teams/MM.jpg',
    portfolio: 'https://www.linkedin.com/in/ahmed-emad-730b12273'
  },
  {
    name: 'Peter Rafat Adel',
    role: 'Data Analyst Expert',
    image: '/assets/teams/peter.jpg',
    portfolio: 'https://peteradel.netlify.app'
  },
  {
    name: 'Mohammed Elhossiny',
    role: 'Data Analyst Expert',
    image: '/public/assets/teams/medoo.JPG',
    portfolio: 'https://www.linkedin.com/in/mohammed-elhossiny'
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
            <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
            <p className="text-gray-600 mb-4">
              This HR Analysis project is a collaborative effort aimed at harnessing data-driven insights to enhance HR strategies and operations. The initiative includes a full-cycle analytical process—from data collection, cleaning, and exploratory analysis to advanced forecasting and strategic decision-making. Detailed visualizations and mining techniques are used to uncover hidden trends and provide actionable recommendations.
            </p>
            <p className="text-gray-600">
              The project is executed under the esteemed supervision of <strong>EYouth</strong> in collaboration with <strong>DEPI from the Ministry of Communications</strong>. This supervision ensures that the methodologies applied are of the highest standard and align with current industry practices, reinforcing the project’s credibility and commitment to excellence.
            </p>
            <p className="text-gray-600 mt-4">
              By integrating rigorous data science methods with strategic HR insights, this project offers a pioneering approach to managing and optimizing human resource functions in a dynamic business environment.
            </p>
          </div>
        );
      case 'overview':
      default:
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-gray-600 mb-4">
              This project is dedicated to comprehensive HR Analysis, covering a complete data-driven journey from initial data collection to strategic decision-making. The project is organized into several key steps:
            </p>
            <ol className="list-decimal ml-6 text-gray-600 mb-4">
              <li>
                <strong>Data Collection:</strong> Gathering essential HR data sets, including employee details, education level, performance ratings, and satisfaction levels.
              </li>
              <li>
                <strong>Data Wrangling & Cleaning:</strong> Transforming raw data into a structured format, identifying and handling missing values, and ensuring consistency across datasets.
              </li>
              <li>
                <strong>Data Exploration & Transformation:</strong> Conducting exploratory analysis to understand underlying patterns and trends in the HR data. This stage involves transforming the data as needed for deeper insights.
              </li>
              <li>
                <strong>Data Modeling & Analysis:</strong> Building predictive and descriptive models to gain further understanding of workforce dynamics. Detailed analyses are performed to highlight key performance indicators and areas for improvement.
              </li>
              <li>
                <strong>Data Forecasting:</strong> Using statistical and machine learning techniques to forecast future HR trends and challenges, ensuring the project remains forward-thinking.
              </li>
              <li>
                <strong>Data Visualization:</strong> Creating engaging visual representations of the data using advanced tools like Power BI, Tableau, and Looker Studio to communicate insights effectively.
              </li>
              <li>
                <strong>Data Mining:</strong> Extracting valuable patterns and trends from vast datasets, providing actionable insights for HR strategies.
              </li>
              <li>
                <strong>Data-Driven Decision Making:</strong> Integrating various analysis frameworks to drive strategy, including Five Forces Analysis, Value Chain Analysis, Blue Ocean Strategy Report, Market Research & Visualization, and PESTEL, SWOT, SOAR, TOWS, and VRIO Analysis Reports.
              </li>
            </ol>
            <p className="text-gray-600">
              Each step builds upon the previous one, ensuring a robust and well-rounded analysis designed to inform and support strategic HR decisions.
            </p>
            <div className="mt-4">
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
