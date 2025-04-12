import React, { useState, useEffect } from 'react';

const tabs = [
  { id: 'powerbi', label: 'Power BI' },
  { id: 'tableau', label: 'Tableau' }
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'powerbi' | 'tableau'>('powerbi');

  useEffect(() => {
    if (activeTab === 'tableau') {
      const script = document.createElement('script');
      script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
      script.async = true;
      script.onload = () => {
        const div = document.getElementById('vizContainer');
        if (!div) return;
        const obj = div.getElementsByTagName('object')[0];
        if (!obj) return;
        obj.style.width = '100%';
        obj.style.height = '100%';
      };
      document.body.appendChild(script);
    }
  }, [activeTab]);

  const renderContent = () => {
    if (activeTab === 'powerbi') {
      return (
        <div className="full-height-container">
          <div className="bg-white p-6 rounded-lg shadow-sm full-height-content">
            <h2 className="text-2xl font-semibold mb-4">Power BI Dashboard</h2>
            <div className="h-full bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                title="Power BI Dashboard"
                className="full-height-iframe"
                src="https://app.powerbi.com/view?r=eyJrIjoiZDViMjQ4MGYtNTU2ZS00ODc4LTg0YWItNGY3MGQyZjY2NjlmIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="full-height-container">
        <div className="bg-white p-6 rounded-lg shadow-sm full-height-content">
          <h2 className="text-2xl font-semibold mb-4">Tableau Visualization</h2>
          <div id="vizContainer" className="h-full bg-gray-100 rounded-lg overflow-hidden">
            <noscript>
              <a href="#">
                <img
                  alt="Tableau Preview"
                  src="https://public.tableau.com/static/images/Da/DataDynamosProjectDataForecasting/HomePage/1_rss.png"
                  style={{ border: 'none' }}
                />
              </a>
            </noscript>
            <object className="tableauViz w-full h-full">
              <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
              <param name="embed_code_version" value="3" />
              <param name="site_root" value="" />
              <param name="name" value="DataDynamosProjectDataForecasting/HomePage" />
              <param name="tabs" value="no" />
              <param name="toolbar" value="yes" />
              <param name="static_image" value="https://public.tableau.com/static/images/Da/DataDynamosProjectDataForecasting/HomePage/1.png" />
              <param name="animate_transition" value="yes" />
              <param name="display_static_image" value="yes" />
              <param name="display_spinner" value="yes" />
              <param name="display_overlay" value="yes" />
              <param name="display_count" value="yes" />
              <param name="language" value="en-US" />
            </object>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-8">
      <div className="flex justify-center mb-8">
        <div className="nav-container">
          <nav className="nav-pills">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'powerbi' | 'tableau')}
                className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
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