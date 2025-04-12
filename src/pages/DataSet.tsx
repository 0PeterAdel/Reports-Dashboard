import React from 'react';
import { FileSpreadsheet, Download, Eye } from 'lucide-react';

const datasets = [
  { 
    name: 'Employee', 
    size: '230KB', 
    lastModified: '2024',
    rows: 1471,
    downloadPath: '/assets/HR-DataSet/Employee.csv',
    viewPath: 'https://docs.google.com/spreadsheets/d/1abc...xyz/edit?usp=sharing'
  },
  { 
    name: 'Performance Rating', 
    size: '293KB', 
    lastModified: '2024',
    rows: 6710,
    downloadPath: '/assets/HR-DataSet/PerformanceRating.csv',
    viewPath: 'https://docs.google.com/spreadsheets/d/2def...uvw/edit?usp=sharing'
  },
  { 
    name: 'Rating Level', 
    size: '125B', 
    lastModified: '2024',
    rows: 5,
    downloadPath: '/assets/HR-DataSet/RatingLevel.csv',
    viewPath: 'https://docs.google.com/spreadsheets/d/3ghi...rst/edit?usp=sharing'
  },
  { 
    name: 'Education Level', 
    size: '117B', 
    lastModified: '2024',
    rows: 5,
    downloadPath: '/assets/HR-DataSet/EducationLevel.csv',
    viewPath: 'https://docs.google.com/spreadsheets/d/4jkl...mno/edit?usp=sharing'
  },
  { 
    name: 'Satisfied Level', 
    size: '115B', 
    lastModified: '2024',
    rows: 5,
    downloadPath: '/assets/HR-DataSet/SatisfiedLevel.csv',
    viewPath: 'https://docs.google.com/spreadsheets/d/5pqr...stu/edit?usp=sharing'
  },
];

export default function DataSet() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Datasets</h1>

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
                      {dataset.size} • {dataset.rows.toLocaleString()} rows • Last modified {dataset.lastModified}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href={dataset.viewPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                    title="View in Google Sheets"
                  >
                    <Eye className="w-5 h-5" />
                  </a>
                  <a
                    href={dataset.downloadPath}
                    download
                    className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                    title="Download Dataset"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}