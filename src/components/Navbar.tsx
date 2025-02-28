import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, DollarSign, LogOut } from 'lucide-react';
import { mockUser } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const isDashboard = location.pathname.includes('/dashboard');
  const navigate = useNavigate();
  // const handleLogout = async () => {
  //   try {
  //     await logout();
  //     setIsOpen(false);
  //   } catch (error) {
  //     console.error('Error logging out:', error);
  //   }
  // };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };


  return (

    
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">

            {!isAuthenticated ? 
              <Link to="/" className="flex items-center">
                <DollarSign className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">FundingFinder test</span>
              </Link>
              :
              <Link to="/dashboard" className="flex items-center">
                  <DollarSign className="h-8 w-8 text-blue-600" />
                  <span className="ml-2 text-xl font-bold text-gray-900">FundingFinder</span>
                </Link>
            }
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {!isAuthenticated &&(<>
              <Link
                to="/"
                className={`${
                  location.pathname === '/' 
                    ? 'border-blue-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${
                  location.pathname === '/about' 
                    ? 'border-blue-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                About
              </Link>
              <Link
                to="/pricing"
                className={`${
                  location.pathname === '/pricing' 
                    ? 'border-blue-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Pricing
              </Link>
               <Link
                to="/dashboard"
                className={`${
                  location.pathname === '/dashboard' 
                    ? 'border-blue-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Dashboard
              </Link>
              </>
              )}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {!isAuthenticated ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="ml-3 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <div className="ml-3 relative flex items-center">
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  {/* <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block">{user?.name || mockUser.name}</span> */}
                  <button 
                    onClick={handleLogout}
                    className="ml-4 px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md flex items-center"
                  >
                    <LogOut className="mr-1 h-4 w-4" /> Log out
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`${
                location.pathname === '/'
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                location.pathname === '/about'
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/pricing"
              className={`${
                location.pathname === '/pricing'
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            {isAuthenticated && (
              <Link
                to="/dashboard"
                className={`${
                  isDashboard
                    ? 'bg-blue-50 border-blue-500 text-blue-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
            )}
            {!isAuthenticated ? (
              <>
                <Link
                  to="/login"
                  className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-blue-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-800 text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Sign up
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 text-base font-medium"
              >
                Log out
              </button>
            )}
          </div>
        </div>
      )}
    </nav>

    
  );
};

export default Navbar;