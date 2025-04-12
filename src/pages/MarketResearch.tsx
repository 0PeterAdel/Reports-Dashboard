import React, { useState } from 'react';
import { FileText, Download, FileSpreadsheet } from 'lucide-react';

const tabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'reports', label: 'Reports' }
];

const dashboardTabs = [
    { id: 'looker', label: 'Market Research Dashboard' },
    { id: 'excel', label: 'Excel Dashboard' }
];

const reports = [
    {
        id: 'Market-Research-Analysis-Report',
        name: 'Market Research Report',
        path: '/public/assets/Reports/10.Data-Driven-Decision-Making/0.Market Research/Market Research Report for HR Data/Market Research Analysis Report for HR Data.pdf',
        type: 'pdf'
    },
    {
        id: 'excel-dashboard',
        name: 'Excel Dashboard',
        path: '/public/assets/Reports/10.Data-Driven-Decision-Making/0.Market Research/Market-Research (Dashboard)/Market-Research (Excel Dashboards).pdf',
        type: 'pdf'
    },
    {
        id: 'LookerStudio-dashboard',
        name: 'LookerStudio Sashboard',
        path: '/public/assets/Reports/10.Data-Driven-Decision-Making/0.Market Research/Market-Research (Dashboard)/HR_Market_Research_(Data_Dynamos_Team) Looker Studio.pdf',
        type: 'pdf'
    },
    {
        id: 'Market-Research-Data',
        name: 'Market Research (Data)',
        path: '/public/assets/Reports/10.Data-Driven-Decision-Making/0.Market Research/Market Research (Data).xlsx',
        type: 'excel'
    },
    {
        id: 'Market-Research-Material',
        name: 'Market Research (Material)',
        path: '/public/assets/Reports/10.Data-Driven-Decision-Making/0.Market Research/Market Research (Material).xlsx',
        type: 'excel'
    },
    {
        id: 'Market-Research-Analysis-Report',
        name: 'Market Research Analysis Report',
        path: '/public/assets/Reports/10.Data-Driven-Decision-Making/0.Market Research/Market Research Report for HR Data/Market Research Analysis Report for HR Data.xlsx',
        type: 'excel'
    },
    {
        id: 'Market-Research-Consolidated',
        name: 'Market-Research Consolidated',
        path: '/public/assets/Reports/10.Data-Driven-Decision-Making/0.Market Research/Market-Research(Looker Studio Data Visualisation)/Market-Research - Consolidated.xlsx',
        type: 'excel'
    }
];

export default function MarketResearch() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [activeDashboard, setActiveDashboard] = useState('looker');
    const [selectedReport, setSelectedReport] = useState<typeof reports[0] | null>(null);

    const renderDashboardContent = () => {
        if (activeDashboard === 'looker') {
            return (
                <div className="h-[calc(100%-3rem)] bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                        title="Market Research Dashboard"
                        className="w-full h-full"
                        // Append '?embed=true' to enforce embed mode.
                        src="https://lookerstudio.google.com/embed/reporting/55f0232c-f9a0-4b54-85a2-68986045284f?embed=true"
                        allowFullScreen
                    />
                </div>
            );
        }

        return (
            <div className="h-[calc(100%-3rem)] bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                    src="/public/assets/Reports/10.Data-Driven-Decision-Making/0.Market Research/Market-Research (Dashboard)/Market-Research (Excel Dashboards).pdf"
                    className="w-full h-full"
                    title="Excel Dashboard"
                />
            </div>
        );
    };

    const renderContent = () => {
        if (activeTab === 'dashboard') {
            return (
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                    <div className="flex justify-center mb-6">
                        <div className="nav-container" style={{ background: '#f3f4f6' }}>
                            <nav className="nav-pills">
                                {dashboardTabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveDashboard(tab.id)}
                                        className={`nav-link ${activeDashboard === tab.id ? 'active' : ''}`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>
                    {renderDashboardContent()}
                </div>
            );
        }

        return (
            <div className="bg-white p-6 rounded-lg shadow-sm h-full">
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
                        <div className="h-[calc(100%-5rem)] bg-gray-100 rounded-lg overflow-hidden">
                            {selectedReport.type === 'pdf' ? (
                                <iframe
                                    src={selectedReport.path}
                                    className="w-full h-full"
                                    title="PDF Viewer"
                                />
                            ) : (
                                <iframe
                                    src={`https://view.officeapps.live.com/op/embed.aspx?src=${window.location.origin}${selectedReport.path}`}
                                    className="w-full h-full"
                                    title="Excel Viewer"
                                />
                            )}
                        </div>
                    </>
                ) : (
                    <div className="h-full flex items-center justify-center text-gray-500">
                        <p>Select a report to view</p>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="p-8 h-[calc(100vh-2rem)]">
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

            <div className="flex gap-6 h-[calc(100%-5rem)]">
                {/* Left Sidebar */}
                {activeTab === 'reports' && (
                    <div className="w-72 bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold mb-4">Available Reports</h3>
                        <div className="space-y-2">
                            {reports.map((report) => (
                                <button
                                    key={report.id}
                                    onClick={() => setSelectedReport(report)}
                                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                                        selectedReport === report
                                            ? 'bg-blue-50 text-blue-700'
                                            : 'hover:bg-gray-50 text-gray-700'
                                    }`}
                                >
                                    {report.type === 'excel' ? (
                                        <FileSpreadsheet className="w-5 h-5 flex-shrink-0" />
                                    ) : (
                                        <FileText className="w-5 h-5 flex-shrink-0" />
                                    )}
                                    <span className="text-sm font-medium">{report.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className={`flex-1 ${activeTab === 'dashboard' ? 'w-full' : ''}`}>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}
