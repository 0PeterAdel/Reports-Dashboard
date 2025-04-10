import React, { useState } from 'react';
import { FileText, Download, FileSpreadsheet, FileImage, Link2 } from 'lucide-react';

const tabs = [
  { id: 'market', label: 'Market Research' },
  { id: 'pestel', label: 'PESTEL Analysis' },
  { id: 'swot', label: 'SWOT Analysis' },
  { id: 'soar', label: 'SOAR Analysis' },
  { id: 'tows', label: 'TOWS Analysis' },
  { id: 'vrio', label: 'VRIO Analysis' }
];

const marketResearchFiles = [
  {
    category: 'Market Size & Growth',
    files: [
      { name: 'Global Market Analysis 2024', path: 'https://example.com/market-analysis.pdf', type: 'pdf' },
      { name: 'Growth Projections', path: 'https://example.com/projections.xlsx', type: 'excel' },
      { name: 'Market Share Distribution', path: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71', type: 'image' }
    ]
  },
  {
    category: 'Consumer Insights',
    files: [
      { name: 'Consumer Behavior Study', path: 'https://example.com/consumer-study.pdf', type: 'pdf' },
      { name: 'Demographics Analysis', path: 'https://example.com/demographics.xlsx', type: 'excel' },
      { name: 'Survey Results Q4 2023', path: 'https://example.com/survey.pdf', type: 'pdf' }
    ]
  },
  {
    category: 'Competitive Analysis',
    files: [
      { name: 'Competitor Benchmark', path: 'https://example.com/benchmark.pdf', type: 'pdf' },
      { name: 'Market Position Map', path: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f', type: 'image' },
      { name: 'Strategy Overview', path: 'https://example.com/strategy.txt', type: 'text' }
    ]
  }
];

const analysisFiles = {
  pestel: [
    { name: 'PESTEL Analysis Report', path: 'https://example.com/pestel.pdf', type: 'pdf' },
    { name: 'Economic Factors Deep Dive', path: 'https://example.com/economic.xlsx', type: 'excel' },
    { name: 'Technology Trends', path: 'https://images.unsplash.com/photo-1518770660439-4636190af475', type: 'image' }
  ],
  swot: [
    { name: 'SWOT Analysis Overview', path: 'https://example.com/swot.pdf', type: 'pdf' },
    { name: 'Strengths Assessment', path: 'https://example.com/strengths.xlsx', type: 'excel' },
    { name: 'Opportunities Map', path: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40', type: 'image' }
  ],
  soar: [
    { name: 'SOAR Framework Analysis', path: 'https://example.com/soar.pdf', type: 'pdf' },
    { name: 'Aspirations Workshop Results', path: 'https://example.com/aspirations.pdf', type: 'pdf' },
    { name: 'Results Dashboard', path: 'https://example.com/results.xlsx', type: 'excel' }
  ],
  tows: [
    { name: 'TOWS Matrix Report', path: 'https://example.com/tows.pdf', type: 'pdf' },
    { name: 'Strategic Options', path: 'https://example.com/strategy.xlsx', type: 'excel' },
    { name: 'Implementation Plan', path: 'https://example.com/implementation.pdf', type: 'pdf' }
  ],
  vrio: [
    { name: 'VRIO Analysis Document', path: 'https://example.com/vrio.pdf', type: 'pdf' },
    { name: 'Resource Assessment', path: 'https://example.com/resources.xlsx', type: 'excel' },
    { name: 'Competitive Advantage Analysis', path: 'https://example.com/advantage.pdf', type: 'pdf' }
  ]
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
  const [activeTab, setActiveTab] = useState('market');
  const [selectedFile, setSelectedFile] = useState<{ name: string; path: string; type: string } | null>(null);

  const renderFileList = () => {
    if (activeTab === 'market') {
      return (
        <div className="space-y-6">
          {marketResearchFiles.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-3">{category.category}</h3>
              <div className="space-y-2">
                {category.files.map((file, fileIndex) => (
                  <button
                    key={fileIndex}
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
            </div>
          ))}
        </div>
      );
    } else {
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
    }
  };

  return (
    <div className="p-8">
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

      <div className="full-height-container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 full-height-content">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Available Files</h2>
            <div className="overflow-y-auto max-h-[calc(100vh-300px)]">
              {renderFileList()}
            </div>
          </div>

          <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-sm flex flex-col h-full">
            {selectedFile && (
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
            )}
            <div className="flex-1 bg-gray-100 rounded-lg overflow-hidden">
              {selectedFile ? (
                (() => {
                  switch (selectedFile.type) {
                    case 'pdf':
                      return (
                        <iframe
                          src={selectedFile.path}
                          className="full-height-iframe"
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
                          className="full-height-iframe"
                          title="Text Viewer"
                        />
                      );
                    default:
                      return (
                        <div className="h-full flex items-center justify-center text-gray-500">
                          <p>Preview not available. Please download to view.</p>
                        </div>
                      );
                  }
                })()
              ) : (
                <div className="h-full flex items-center justify-center text-gray-500">
                  <p>Select a file to view</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}