import React, { useState, useEffect } from 'react';
import { BarChart3, Users, FileSpreadsheet, TrendingUp, Download, FileText } from 'lucide-react';

const tabs = [
  { id: 'powerbi', label: 'Power BI' },
  { id: 'tableau', label: 'Tableau' },
  { id: 'report', label: 'Report File PDF' },
  // { id: 'forecasting', label: 'Data-Forecasting' },
  // { id: 'mining', label: 'Data-Mining' }
];

const reports = [
  { id: 'powerbi-report', name: 'Power BI Analysis Report', path: '/assets/pdf/powerbi-report.pdf', type: 'pdf' },
  { id: 'tableau-report', name: 'Tableau Visualization Report', path: '/assets/pdf/tableau-report.pdf', type: 'pdf' },
  { id: 'final-report', name: 'Final Project Report', path: '/public/assets/pdf/powerbi.pdf', type: 'pdf' },
  { id: 'forecast-report', name: 'Forecast Report', path: '/assets/pdf/forecast-report.pdf', type: 'pdf' },
  { id: 'jupyter-notebook', name: 'Jupiter Notebook Code', path: '/assets/forecast.ipynb', type: 'jupyter' },
  { id: 'mining-report', name: 'Data Mining Report', path: '/assets/pdf/data-mining-report.pdf', type: 'pdf' },
  { id: 'mining-dashboard', name: 'Dashboard', path: '/assets/dashboard.xlsx', type: 'excel' }
];

const stats = [
  { label: 'Total Users', value: '1,234', icon: <Users className="w-6 h-6" /> },
  { label: 'Reports Generated', value: '56', icon: <FileSpreadsheet className="w-6 h-6" /> },
  { label: 'Data Points', value: '89,012', icon: <BarChart3 className="w-6 h-6" /> },
  { label: 'Growth Rate', value: '23%', icon: <TrendingUp className="w-6 h-6" /> },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('powerbi');
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  useEffect(() => {
    if (activeTab === 'tableau') {
      const loadTableauScript = () => {
        const script = document.createElement('script');
        script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        script.async = true;
        script.onload = initializeTableau;
        document.body.appendChild(script);
      };

      loadTableauScript();
    }
  }, [activeTab]);

  const initializeTableau = () => {
    const divElement = document.getElementById('viz1742151013704');
    if (!divElement) return;

    const vizElement = divElement.getElementsByTagName('object')[0];
    if (!vizElement) return;

    if (divElement.offsetWidth > 800) {
      vizElement.style.minWidth = '420px';
      vizElement.style.maxWidth = '650px';
      vizElement.style.width = '100%';
      vizElement.style.minHeight = '587px';
      vizElement.style.maxHeight = '887px';
      vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
    } else if (divElement.offsetWidth > 500) {
      vizElement.style.minWidth = '420px';
      vizElement.style.maxWidth = '650px';
      vizElement.style.width = '100%';
      vizElement.style.minHeight = '587px';
      vizElement.style.maxHeight = '887px';
      vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
    } else {
      vizElement.style.width = '100%';
      vizElement.style.height = '1227px';
    }
  };

  const getReportsByType = (tabId: string) => {
    switch (tabId) {
      case 'powerbi':
        return [reports.find(r => r.id === 'powerbi-report')];
      case 'tableau':
        return [reports.find(r => r.id === 'tableau-report')];
      case 'report':
        return [reports.find(r => r.id === 'final-report')];
      case 'forecasting':
        return reports.filter(r => r.id === 'forecast-report' || r.id === 'jupyter-notebook');
      case 'mining':
        return reports.filter(r => r.id === 'mining-report' || r.id === 'mining-dashboard');
      default:
        return [];
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'tableau':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className='tableauPlaceholder' id='viz1742151013704' style={{position: 'relative'}}>
              <noscript>
                <a href='#'>
                  <img 
                    alt='Home Page' 
                    src='https://public.tableau.com/static/images/Da/DataDynamosProjectDataForecasting/HomePage/1_rss.png' 
                    style={{border: 'none'}} 
                  />
                </a>
              </noscript>
              <object className='tableauViz' style={{display: 'none'}}>
                <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                <param name='embed_code_version' value='3' />
                <param name='site_root' value='' />
                <param name='name' value='DataDynamosProjectDataForecasting/HomePage' />
                <param name='tabs' value='no' />
                <param name='toolbar' value='yes' />
                <param name='static_image' value='https://public.tableau.com/static/images/Da/DataDynamosProjectDataForecasting/HomePage/1.png' />
                <param name='animate_transition' value='yes' />
                <param name='display_static_image' value='yes' />
                <param name='display_spinner' value='yes' />
                <param name='display_overlay' value='yes' />
                <param name='display_count' value='yes' />
                <param name='language' value='en-US' />
              </object>
            </div>
          </div>
        );
      case 'powerbi':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Power BI Dashboard</h2>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Power BI Dashboard Embed</p>
            </div>
          </div>
        );
      case 'report':
      case 'forecasting':
      case 'mining':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Report List Sidebar */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Available Files</h3>
              <div className="space-y-3">
                {getReportsByType(activeTab).map((report) => (
                  report && (
                    <button
                      key={report.id}
                      onClick={() => setSelectedReport(report.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                        selectedReport === report.id
                          ? 'bg-blue-50 text-blue-700'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <FileText className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm font-medium">{report.name}</span>
                    </button>
                  )
                ))}
              </div>
            </div>

            {/* Content Viewer */}
            <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-sm">
              {selectedReport ? (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">
                      {reports.find(r => r.id === selectedReport)?.name}
                    </h2>
                    <a
                      href={reports.find(r => r.id === selectedReport)?.path}
                      download
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                  <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                    {(() => {
                      const report = reports.find(r => r.id === selectedReport);
                      if (!report) return null;

                      switch (report.type) {
                        case 'pdf':
                          return (
                            <iframe
                              src={report.path}
                              className="w-full h-full"
                              title="PDF Viewer"
                            />
                          );
                        case 'jupyter':
                          return (
                            <iframe
                              src={report.path}
                              className="w-full h-full"
                              title="Jupyter Notebook Viewer"
                            />
                          );
                        case 'excel':
                          return (
                            <iframe
                              src={`https://view.officeapps.live.com/op/embed.aspx?src=${window.location.origin}${report.path}`}
                              className="w-full h-full"
                              title="Excel Viewer"
                            />
                          );
                        default:
                          return (
                            <div className="h-full flex items-center justify-center text-gray-500">
                              <p>Preview not available. Please download the file.</p>
                            </div>
                          );
                      }
                    })()}
                  </div>
                </>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-500">
                  <p>Select a file to view</p>
                </div>
              )}
            </div>
          </div>
        );
      default:
        return null;
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
                onClick={() => {
                  setActiveTab(tab.id);
                  setSelectedReport(null);
                }}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                {stat.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      {renderContent()}
    </div>
  );
}