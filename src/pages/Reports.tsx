import React, { useState } from 'react';
import { FileText, Download } from 'lucide-react';

const tabs = [
  { id: 'data-wrangling', label: 'Data-Wrangling' },
  { id: 'exploration', label: 'Exploration' },
  { id: 'analysis', label: 'Analysis' },
  { id: 'forecasting', label: 'Forecasting' },
  { id: 'visualization', label: 'Visualization' },
  { id: 'data-mining', label: 'Data-Mining' },
  { id: 'data-storage', label: 'Data-Storage' }
];

const reports = {
  'data-wrangling': [
    { name: 'Data Wrangling Report', type: 'PDF', size: '2.1 MB', date: '2024-03-15', path: '/public/assets/Reports/02.Data-Wrangling/Data-Wrangling.pdf' }
  ],
  'exploration': [
    { name: 'Business Questions', type: 'PDF', size: '1.5 MB', date: '2024-03-14', path: '/assets/reports/business-questions.pdf' },
    { name: 'HR Domain Guide', type: 'PDF', size: '2.3 MB', date: '2024-03-14', path: '/assets/reports/hr-domain-guide.pdf' }
  ],
  'analysis': [
    { name: 'Analysis Report', type: 'PDF', size: '3.2 MB', date: '2024-03-13', path: '/assets/reports/analysis-report.pdf' },
    { name: 'Jupyter Notebook', type: 'ipynb', size: '856 KB', date: '2024-03-13', path: '/assets/notebooks/analysis.ipynb' }
  ],
  'forecasting': [
    { name: 'Forecast Report', type: 'PDF', size: '2.8 MB', date: '2024-03-12', path: '/assets/reports/forecast-report.pdf' },
    { name: 'Jupyter Notebook', type: 'ipynb', size: '1.2 MB', date: '2024-03-12', path: '/assets/notebooks/forecast.ipynb' }
  ],
  'visualization': [
    { name: 'Visualization Report', type: 'PDF', size: '4.1 MB', date: '2024-03-11', path: '/assets/reports/visualization-report.pdf' },
    { name: 'Power BI Dashboard', type: 'pbix', size: '5.2 MB', date: '2024-03-11', path: '/assets/powerbi/dashboard.pbix' },
    { name: 'Tableau Workbook', type: 'twb', size: '4.8 MB', date: '2024-03-11', path: '/assets/tableau/workbook.twb' }
  ],
  'data-mining': [
    { name: 'Data Mining Report', type: 'PDF', size: '2.9 MB', date: '2024-03-10', path: '/assets/reports/data-mining-report.pdf' },
    { name: 'Dashboard', type: 'PDF', size: '1.8 MB', date: '2024-03-10', path: '/assets/reports/data-mining-dashboard.pdf' }
  ],
  'data-storage': [
    { name: 'Storage Report', type: 'PDF', size: '1.6 MB', date: '2024-03-09', path: '/assets/reports/storage-report.pdf' }
  ]
};

export default function Reports() {
  const [activeTab, setActiveTab] = useState('data-wrangling');
  const [selectedReport, setSelectedReport] = useState(reports[activeTab][0]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setSelectedReport(reports[tabId][0]);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Top Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-8">
          <nav className="flex -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-4 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-hidden p-8">
        <div className="h-full flex">
          {/* Left Sidebar - Report List */}
          <div className="w-72 border-r border-gray-200 bg-white overflow-y-auto rounded-l-lg">
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Reports</h2>
              <div className="space-y-2">
                {reports[activeTab].map((report, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedReport(report)}
                    className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                      selectedReport === report
                        ? 'bg-blue-50 text-blue-700'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <FileText className="w-5 h-5 mr-3 flex-shrink-0" />
                    <div className="flex-1 text-left">
                      <p className="text-sm font-medium">{report.name}</p>
                      <p className="text-xs text-gray-500">
                        {report.type} • {report.size}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content - PDF Viewer */}
          <div className="flex-1 bg-white rounded-r-lg">
            <div className="h-full flex flex-col">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{selectedReport.name}</h1>
                    <p className="text-sm text-gray-500">Last modified: {selectedReport.date}</p>
                  </div>
                  <a
                    href={selectedReport.path}
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              </div>
              
              {/* PDF Viewer */}
              <div className="flex-1 min-h-0 p-6">
                <div className="h-full bg-gray-100 rounded-lg overflow-hidden">
                  {selectedReport.type === 'PDF' ? (
                    <iframe
                      src={selectedReport.path}
                      className="w-full h-full"
                      title="PDF Viewer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      This file type cannot be previewed. Please download to view.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}