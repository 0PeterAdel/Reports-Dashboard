import React, { useState, useEffect } from 'react';
import { FileText, Download } from 'lucide-react';

const tabs = [
  { id: 'powerbi', label: 'Power BI' },
  { id: 'tableau', label: 'Tableau' },
  { id: 'report', label: 'PDF Report' }
];

const reports = [
  { id: 'powerbi-report', name: 'Power BI Analysis Report', path: '/assets/pdf/powerbi-report.pdf', type: 'pdf' },
  { id: 'tableau-report', name: 'Tableau Visualization Report', path: '/assets/pdf/tableau-report.pdf', type: 'pdf' },
  { id: 'final-report', name: 'Final Project Report', path: '/assets/pdf/final-report.pdf', type: 'pdf' }
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'powerbi' | 'tableau' | 'report'>('powerbi');
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

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

  const getReports = () => {
    switch (activeTab) {
      case 'powerbi':
        return []; // No PDFs here
      case 'tableau':
        return [];
      case 'report':
        return reports;
      default:
        return [];
    }
  };

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

    if (activeTab === 'tableau') {
      return (
        <div className="full-height-container">
          <div className="bg-white p-6 rounded-lg shadow-sm full-height-content">
            <h2 className="text-2xl font-semibold mb-4">Tableau Visualization</h2>
            <div id="vizContainer" className="tableauPlaceholder h-full">
              <noscript>
                <a href="#">
                  <img
                    alt="Tableau Preview"
                    src="https://public.tableau.com/static/images/Da/DataDynamosProjectDataForecasting/HomePage/1_rss.png"
                    style={{ border: 'none' }}
                  />
                </a>
              </noscript>
              <object className="tableauViz">
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
    }

    // PDF Reports
    const available = getReports();
    return (
      <div className="full-height-container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 full-height-content">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Available Files</h3>
            <div className="space-y-3">
              {available.map(report => (
                <button
                  key={report.id}
                  onClick={() => setSelectedReport(report.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    selectedReport === report.id ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <FileText className="w-5 h-5" />
                  <span className="text-sm font-medium">{report.name}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-sm flex flex-col h-full">
            {selectedReport ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold">
                    {reports.find(r => r.id === selectedReport)?.name}
                  </h2>
                  <a
                    href={reports.find(r => r.id === selectedReport)?.path}
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
                <div className="flex-1 bg-gray-100 rounded-lg overflow-hidden">
                  <iframe
                    src={reports.find(r => r.id === selectedReport)?.path}
                    className="full-height-iframe"
                    title="PDF Viewer"
                  />
                </div>
              </>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                <p>Select a file to view</p>
              </div>
            )}
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
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setSelectedReport(null);
                }}
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