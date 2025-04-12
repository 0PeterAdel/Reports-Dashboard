import React, { useState } from 'react';
import { FileText, Download } from 'lucide-react';

const tabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'reports', label: 'Reports' }
];

const reports = [
    {
        id: 'excel-dashboard',
        name: 'Excel Dashboard',
        path: '/assets/market-research/Excel dashboard.pdf',
        type: 'pdf'
    },
    {
        id: 'analysis-report',
        name: 'Market Research Analysis Report',
        path: '/assets/market-research/Market Research Analysis Report.pdf',
        type: 'pdf'
    }
];

export default function MarketResearch() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [selectedReport, setSelectedReport] = useState<typeof reports[0] | null>(null);

    const renderContent = () => {
        if (activeTab === 'dashboard') {
            return (
                <div className="full-height-container">
                    <div className="bg-white p-6 rounded-lg shadow-sm full-height-content">
                        <h2 className="text-2xl font-semibold mb-4">Market Research Dashboard</h2>
                        <div className="h-full bg-gray-100 rounded-lg overflow-hidden">
                            <iframe
                                title="Market Research Dashboard"
                                className="full-height-iframe"
                                src="https://lookerstudio.google.com/embed/reporting/55f0232c-f9a0-4b54-85a2-68986045284f/page/p_9gl4sc4pqd"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="full-height-container">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 full-height-content">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold mb-4">Available Reports</h3>
                        <div className="space-y-2">
                            {reports.map((report) => (
                                <button
                                    key={report.id}
                                    onClick={() => setSelectedReport(report)}
                                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${selectedReport === report
                                            ? 'bg-blue-50 text-blue-700'
                                            : 'hover:bg-gray-50 text-gray-700'
                                        }`}
                                >
                                    <FileText className="w-5 h-5 flex-shrink-0" />
                                    <span className="text-sm font-medium">{report.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-sm flex flex-col h-full">
                        {selectedReport ? (
                            <>
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-semibold">{selectedReport.name}</h2>
                                    <a
                                        href={selectedReport.path}
                                        download
                                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        <Download className="w-4 h-4" />
                                        Download
                                    </a>
                                </div>
                                <div className="flex-1 bg-gray-100 rounded-lg overflow-hidden">
                                    <iframe
                                        src={selectedReport.path}
                                        className="full-height-iframe"
                                        title="PDF Viewer"
                                    />
                                </div>
                            </>
                        ) : (
                            <div className="h-full flex items-center justify-center text-gray-500">
                                <p>Select a report to view</p>
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
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => {
                                    setActiveTab(tab.id);
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