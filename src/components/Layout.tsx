import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Home, LayoutDashboard, FileText, Database, Contact, Cuboid as Cube, LineChart, PieChart, Brain } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" />, to: '/' },
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, to: '/dashboard' },
  { id: 'forecasting', label: 'Data-Forecasting', icon: <LineChart className="w-5 h-5" />, to: '/data-forecasting' },
  { id: 'mining', label: 'Data-Mining', icon: <PieChart className="w-5 h-5" />, to: '/data-mining' },
  { id: 'decision', label: 'Data-Driven-Decision-Making', icon: <Brain className="w-5 h-5" />, to: '/decision-making' },
  { id: 'reports', label: 'Reports', icon: <FileText className="w-5 h-5" />, to: '/reports' },
  { id: 'data-set', label: 'Data-Set', icon: <Database className="w-5 h-5" />, to: '/data-set' },
  { id: 'contact', label: 'Contact', icon: <Contact className="w-5 h-5" />, to: '/contact' },
];

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-[280px] bg-white p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <Cube className="w-12 h-12 text-blue-600" />
          <span className="text-2xl font-bold">Data-Dynamos</span>
        </div>
        <hr className="border-gray-200 mb-6" />
        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <hr className="border-gray-200 mt-6" />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}