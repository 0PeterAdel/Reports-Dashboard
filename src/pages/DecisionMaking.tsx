import React, { useState } from 'react';
import { FileText, Download, FileSpreadsheet, FileImage, Link2 } from 'lucide-react';

const tabs = [
  { id: 'Additional', label: 'Additional Analysis' },
  { id: 'pestel', label: 'PESTEL Analysis' },
  { id: 'swot', label: 'SWOT Analysis' },
  { id: 'soar', label: 'SOAR Analysis' },
  { id: 'tows', label: 'TOWS Analysis' },
  { id: 'vrio', label: 'VRIO Analysis' },
  { id: 'Forces', label: 'Five Forces Analysis' },
  { id: 'Chain', label: 'Value Chain Analysis' },
  { id: 'Ocean', label: 'Blue Ocean Strategy' },
];

const analysisFiles = {
  Additional: [
    { name: 'Turnover & KPI Analysis', path: '/assets/Reports/10.Data-Driven-Decision-Making/09.Additional-Analysis/code_Turnover & KPI Analysis.pdf', type: 'pdf' },
    { name: 'Turnover & KPI Analysis Report', path: '/assets/Reports/10.Data-Driven-Decision-Making/09.Additional-Analysis/Turnover & KPI Analysis.pdf', type: 'pdf' },
    { name: 'Employee Engagement & Prediction', path: '/assets/Reports/10.Data-Driven-Decision-Making/09.Additional-Analysis/code_Employee Engagement & Prediction.pdf', type: 'pdf' },
    { name: 'Employee Engagement & Prediction Report', path: '/assets/Reports/10.Data-Driven-Decision-Making/09.Additional-Analysis/Employee Engagement & Prediction.pdf', type: 'pdf' },
    { name: 'Additional-Analysis', path: '/assets/Reports/10.Data-Driven-Decision-Making/09.Additional-Analysis/code_Additional-Analysis.pdf', type: 'pdf' },
    { name: 'Additional-Analysis Report', path: '/assets/Reports/10.Data-Driven-Decision-Making/09.Additional-Analysis/Additional-Analysis.pdf', type: 'pdf' },
  ],
  pestel: [
    { name: 'PESTEL Analysis Report', path: '/assets/Reports/10.Data-Driven-Decision-Making/1.PESTEL Analysis Report for HR Data/PESTEL Analysis Report for HR Data.pdf', type: 'pdf' },
    { name: 'PESTEL Analysis Report Excel', path: '/assets/Reports/10.Data-Driven-Decision-Making/1.PESTEL Analysis Report for HR Data/PESTEL Analysis Report for HR Data.xlsx', type: 'excel' },
  ],
  swot: [
    { name: 'SWOT Analysis Overview', path: '/assets/Reports/10.Data-Driven-Decision-Making/2.SWOT Analysis Report for HR Data/SWOT Analysis Report for HR Data.pdf', type: 'pdf' },
    { name: 'SWOT Analysis Excel', path: '/assets/Reports/10.Data-Driven-Decision-Making/2.SWOT Analysis Report for HR Data/SWOT Analysis Report for HR Data.xlsx', type: 'excel' },
  ],
  soar: [
    { name: 'SOAR Analysis', path: '/assets/Reports/10.Data-Driven-Decision-Making/3.SOAR Analysis Report for HR Data/SOAR Analysis Report for HR Data.pdf', type: 'pdf' },
    { name: 'Results Dashboard', path: '/assets/Reports/10.Data-Driven-Decision-Making/3.SOAR Analysis Report for HR Data/SOAR Analysis Report for HR Data.xlsx', type: 'excel' },
  ],
  tows: [
    { name: 'TOWS Analysis Report', path: '/assets/Reports/10.Data-Driven-Decision-Making/4.TOWS Analysis Report for HR Data/TOWS Analysis Report for HR Data.pdf', type: 'pdf' },
    { name: 'TOWS Analysis Report Excel', path: '/assets/Reports/10.Data-Driven-Decision-Making/4.TOWS Analysis Report for HR Data/TOWS Analysis Report for HR Data.xlsx', type: 'excel' },
  ],
  vrio: [
    { name: 'VRIO Analysis Report', path: '/assets/Reports/10.Data-Driven-Decision-Making/5.VRIO Analysis Report for HR Data/VRIO Analysis Report for HR Data.pdf', type: 'pdf' },
    { name: 'VRIO Analysis Excel', path: '/assets/Reports/10.Data-Driven-Decision-Making/5.VRIO Analysis Report for HR Data/VRIO Analysis Report for HR Data.xlsx', type: 'excel' },
  ],
  Forces: [
    { name: 'Five Forces Analysis Report', path: '/assets/Reports/10.Data-Driven-Decision-Making/06.Five Forces Analysis Report for HR Data/Five Forces Analysis Report for HR Data.pdf', type: 'pdf' },
  ],
  Chain: [
    { name: 'Value Chain Analysis Report', path: '/assets/Reports/10.Data-Driven-Decision-Making/07.Value Chain Analysis Report for HR Data/Value Chain Analysis Report for HR Data.pdf', type: 'pdf' },
  ],
  Ocean: [
    { name: 'Blue Ocean Strategy Report', path: '/assets/Reports/10.Data-Driven-Decision-Making/08.Blue Ocean Strategy Report for HR Data/Blue Ocean Strategy (ERRC Analysis )Report for HR Data.pdf', type: 'pdf' },
  ],
};

function FileIcon({ type }: { type: string }) {
  switch (type) {
    case 'pdf':
      return <FileText className="w-5 h-5 flex-shrink-0" />;
    case 'excel':
      return <FileSpreadsheet className="w-5 h-5 flex-shrink-0" />;
    case 'image':
      return <FileImage className="w-5 h-5 flex-shrink-0" />;
    case 'text':
      return <Link2 className="w-5 h-5 flex-shrink-0" />;
    default:
      return <FileText className="w-5 h-5 flex-shrink-0" />;
  }
}

export default function DecisionMaking() {
  const [activeTab, setActiveTab] = useState('pestel');
  const [selectedFile, setSelectedFile] = useState<{ name: string; path: string; type: string } | null>(null);

  const renderFileList = () => {
    const files = analysisFiles[activeTab as keyof typeof analysisFiles];
    return (
      <div className="space-y-2">
        {files.map((file, index) => (
          <button
            key={index}
            onClick={() => setSelectedFile(file)}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
              selectedFile === file
                ? 'bg-blue-50 text-blue-700'
                : 'hover:bg-gray-50 text-gray-700'
            }`}
          >
            <FileIcon type={file.type} />
            <span className="text-sm font-medium">{file.name}</span>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="p-8 h-[calc(100vh-2rem)]">
      <h1 className="text-3xl font-bold mb-6">Data-Driven Decision Making</h1>

      <div className="flex justify-center mb-8">
        <div className="nav-container">
          <nav className="nav-pills">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`nav-link ${tab.id === activeTab ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSelectedFile(null);
                }}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="flex gap-6 h-[calc(100%-11rem)]">
        {/* Left Sidebar */}
        <div className="w-72 bg-white p-6 rounded-lg shadow-sm overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Available Files</h2>
          {renderFileList()}
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-sm">
          {selectedFile ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">{selectedFile.name}</h2>
                <a
                  href={selectedFile.path}
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
              <div className="h-[calc(100%-5rem)] bg-gray-100 rounded-lg overflow-hidden">
                {(() => {
                  switch (selectedFile.type) {
                    case 'pdf':
                      return (
                        <iframe
                          src={selectedFile.path}
                          className="w-full h-full"
                          title="PDF Viewer"
                        />
                      );
                    case 'image':
                      return (
                        <img
                          src={selectedFile.path}
                          alt={selectedFile.name}
                          className="w-full h-full object-contain"
                        />
                      );
                    case 'text':
                      return (
                        <iframe
                          src={selectedFile.path}
                          className="w-full h-full"
                          title="Text Viewer"
                        />
                      );
                    case 'excel':
                      return (
                        <iframe
                          src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(selectedFile.path)}`}
                          className="w-full h-full"
                          title="Excel Viewer"
                        />
                      );
                    default:
                      return (
                        <div className="h-full flex items-center justify-center text-gray-500">
                          <p>Preview not available. Please download to view.</p>
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
    </div>
  );
}