import React, { useState } from 'react';
import { FileText, Download, FileSpreadsheet } from 'lucide-react';

const files = [
  {
    id: 'mining-report',
    name: 'Data Mining Report',
    path: '/assets/Reports/09.Data-Mining/Data-Mining.pdf',
    type: 'pdf'
  },
  {
    id: 'mining-dashboard',
    name: 'Dashboard',
    path: '/assets/Reports/09.Data-Mining/Dashboard.pdf',
    type: 'pdf'
  }
];

export default function DataMining() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  return (
    <div className="p-8 h-[calc(100vh-2rem)]">
      <h1 className="text-3xl font-bold mb-6">Data Mining</h1>
      
      <div className="flex gap-6 h-[calc(100%-5rem)]">
        {/* Left Sidebar */}
        <div className="w-72 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Available Files</h3>
          <div className="space-y-2">
            {files.map((file) => (
              <button
                key={file.id}
                onClick={() => setSelectedFile(file.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  selectedFile === file.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                {file.type === 'excel' ? (
                  <FileSpreadsheet className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <FileText className="w-5 h-5 flex-shrink-0" />
                )}
                <span className="text-sm font-medium">{file.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-sm">
          {selectedFile ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">
                  {files.find(f => f.id === selectedFile)?.name}
                </h2>
                <a
                  href={files.find(f => f.id === selectedFile)?.path}
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
              <div className="h-[calc(100%-5rem)] bg-gray-100 rounded-lg overflow-hidden">
                {(() => {
                  const file = files.find(f => f.id === selectedFile);
                  if (!file) return null;

                  switch (file.type) {
                    case 'pdf':
                      return (
                        <iframe
                          src={file.path}
                          className="w-full h-full"
                          title="PDF Viewer"
                        />
                      );
                    case 'excel':
                      return (
                        <iframe
                          src={`https://view.officeapps.live.com/op/embed.aspx?src=${window.location.origin}${file.path}`}
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
    </div>
  );
}