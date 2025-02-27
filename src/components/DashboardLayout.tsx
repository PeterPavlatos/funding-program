import React, { ReactNode, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, FileText, BarChart, Bell, Settings, LogOut, Menu, X, DollarSign } from 'lucide-react';
import { mockUser } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/dashboard" className="flex items-center">
                  <DollarSign className="h-8 w-8 text-blue-600" />
                  <span className="ml-2 text-xl font-bold text-gray-900">FundingFinder</span>
                </Link>
              </div>
            </div>
            
            {/* User profile dropdown */}
            <div className="flex items-center">
              <div className="ml-3 relative flex items-center">
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block">{user?.name || mockUser.name}</span>
                  <button 
                    onClick={handleLogout}
                    className="ml-4 px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md flex items-center"
                  >
                    <LogOut className="mr-1 h-4 w-4" /> Log out
                  </button>
                </div>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden ml-3">
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                  <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
                  {isMobileMenuOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col h-0 flex-1 bg-gray-800">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <nav className="mt-5 flex-1 px-2 bg-gray-800 space-y-1">
                  <Link
                    to="/dashboard"
                    className={`${
                      location.pathname === '/dashboard'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                  >
                    <BarChart className="mr-3 h-6 w-6 text-gray-300" />
                    Dashboard
                  </Link>
                  <Link
                    to="/dashboard/funding-search"
                    className={`${
                      location.pathname === '/dashboard/funding-search'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                  >
                    <Search className="mr-3 h-6 w-6 text-gray-400" />
                    Funding Search
                  </Link>
                  <Link
                    to="/dashboard/business-plan"
                    className={`${
                      location.pathname === '/dashboard/business-plan'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                  >
                    <FileText className="mr-3 h-6 w-6 text-gray-400" />
                    Business Plan
                    {!user?.isPremium && !mockUser.isPremium && (
                      <span className="ml-auto inline-block py-0.5 px-3 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                        Premium
                      </span>
                    )}
                  </Link>
                  <Link
                    to="/dashboard/notifications"
                    className={`${
                      location.pathname === '/dashboard/notifications'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                  >
                    <Bell className="mr-3 h-6 w-6 text-gray-400" />
                    Notifications
                  </Link>
                  <Link
                    to="/dashboard/settings"
                    className={`${
                      location.pathname === '/dashboard/settings'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                  >
                    <Settings className="mr-3 h-6 w-6 text-gray-400" />
                    Settings
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <main className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;