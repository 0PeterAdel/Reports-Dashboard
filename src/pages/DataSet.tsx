import React from 'react';
import { FileSpreadsheet, Download, Eye } from 'lucide-react';

export default function DataSet() {
  const datasets = [
    { name: 'Employee', size: '230KB', lastModified: '2024-03-15' },
    { name: 'Performance Rating', size: '293KB', lastModified: '2024-03-14' },
    { name: 'Education Level', size: '117B', lastModified: '2024-03-13' },
    { name: 'Rating Level', size: '125B', lastModified: '2024-03-12' },
    { name: 'Satisfied Level', size: '115B', lastModified: '2024-03-11' },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Datasets</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Upload Dataset
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="grid grid-cols-1 gap-4">
            {datasets.map((dataset, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    <FileSpreadsheet className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{dataset.name}</h3>
                    <p className="text-sm text-gray-500">
                      {dataset.size} • Last modified {dataset.lastModified}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}