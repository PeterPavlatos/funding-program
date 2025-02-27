import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Save, AlertTriangle } from 'lucide-react';
import { mockUser } from '../data/mockData';
import DashboardLayout from '../components/DashboardLayout';

const BusinessPlanPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('executive');
  const [planData, setPlanData] = useState({
    executive: '',
    company: '',
    market: '',
    products: '',
    strategy: '',
    team: '',
    financial: '',
    funding: '',
  });
  
  const handleInputChange = (section: string, value: string) => {
    setPlanData({
      ...planData,
      [section]: value
    });
  };
  
  const sections = [
    { id: 'executive', name: 'Executive Summary' },
    { id: 'company', name: 'Company Description' },
    { id: 'market', name: 'Market Analysis' },
    { id: 'products', name: 'Products & Services' },
    { id: 'strategy', name: 'Marketing & Sales Strategy' },
    { id: 'team', name: 'Management Team' },
    { id: 'financial', name: 'Financial Projections' },
    { id: 'funding', name: 'Funding Request' },
  ];
  
  if (!mockUser.isPremium) {
    return (
      <DashboardLayout>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6 text-center">
              <AlertTriangle className="mx-auto h-12 w-12 text-yellow-400" />
              <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">Premium Feature</h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500 mx-auto">
                <p>
                  The Business Plan Builder is available exclusively to Premium subscribers.
                </p>
              </div>
              <div className="mt-5">
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Upgrade to Premium
                </Link>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }
  
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Business Plan Builder</h1>
            <div className="flex space-x-3">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Save className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
                Save Draft
              </button>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Download className="-ml-1 mr-2 h-5 w-5 text-white" />
                Export PDF
              </button>
            </div>
          </div>
          
          <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-4">
              {/* Sidebar */}
              <div className="bg-gray-50 p-4 border-r border-gray-200">
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`${
                        activeSection === section.id
                          ? 'bg-blue-50 border-blue-500 text-blue-700'
                          : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      } flex items-center pl-3 pr-2 py-2 border-l-4 text-sm font-medium w-full text-left`}
                    >
                      <FileText
                        className={`mr-3 flex-shrink-0 h-5 w-5 ${
                          activeSection === section.id ? 'text-blue-500' : 'text-gray-400'
                        }`}
                      />
                      <span className="truncate">{section.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
              
              {/* Content */}
              <div className="col-span-3 p-6">
                <div className="space-y-6">
                  {sections.map((section) => (
                    <div key={section.id} className={activeSection === section.id ? '' : 'hidden'}>
                      <h2 className="text-lg font-medium text-gray-900">{section.name}</h2>
                      
                      {section.id === 'executive' && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-500 mb-4">
                            Provide a brief overview of your business, including your mission, vision, and goals.
                          </p>
                          <textarea
                            rows={10}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Write your executive summary here..."
                            value={planData.executive}
                            onChange={(e) => handleInputChange('executive', e.target.value)}
                          />
                        </div>
                      )}
                      
                      {section.id === 'company' && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-500 mb-4">
                            Describe your company's legal structure, location, history, and current status.
                          </p>
                          <textarea
                            rows={10}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Write your company description here..."
                            value={planData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                          />
                        </div>
                      )}
                      
                      {section.id === 'market' && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-500 mb-4">
                            Analyze your industry, target market, and competition.
                          </p>
                          <textarea
                            rows={10}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Write your market analysis here..."
                            value={planData.market}
                            onChange={(e) => handleInputChange('market', e.target.value)}
                          />
                        </div>
                      )}
                      
                      {section.id === 'products' && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-500 mb-4">
                            Detail the products or services you offer and their benefits to customers.
                          </p>
                          <textarea
                            rows={10}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Write about your products and services here..."
                            value={planData.products}
                            onChange={(e) => handleInputChange('products', e.target.value)}
                          />
                        </div>
                      )}
                      
                      {section.id === 'strategy' && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-500 mb-4">
                            Outline your marketing and sales strategies for reaching and converting customers.
                          </p>
                          <textarea
                            rows={10}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Write your marketing and sales strategy here..."
                            value={planData.strategy}
                            onChange={(e) => handleInputChange('strategy', e.target.value)}
                          />
                        </div>
                      )}
                      
                      {section.id === 'team' && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-500 mb-4">
                            Introduce your management team, their qualifications, and roles.
                          </p>
                          <textarea
                            rows={10}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Write about your management team here..."
                            value={planData.team}
                            onChange={(e) => handleInputChange('team', e.target.value)}
                          />
                        </div>
                      )}
                      
                      {section.id === 'financial' && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-500 mb-4">
                            Present your financial projections, including income statements, balance sheets, and cash flow statements.
                          </p>
                          <textarea
                            rows={10}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Write your financial projections here..."
                            value={planData.financial}
                            onChange={(e) => handleInputChange('financial', e.target.value)}
                          />
                        </div>
                      )}
                      
                      {section.id === 'funding' && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-500 mb-4">
                            Specify how much funding you need, how you'll use it, and your repayment strategy.
                          </p>
                          <textarea
                            rows={10}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Write your funding request here..."
                            value={planData.funding}
                            onChange={(e) => handleInputChange('funding', e.target.value)}
                          />
                        </div>
                      )}
                      
                      <div className="mt-6 flex justify-between">
                        <button
                          type="button"
                          onClick={() => {
                            const currentIndex = sections.findIndex(s => s.id === activeSection);
                            if (currentIndex > 0) {
                              setActiveSection(sections[currentIndex - 1].id);
                            }
                          }}
                          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Previous
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            const currentIndex = sections.findIndex(s => s.id === activeSection);
                            if (currentIndex < sections.length - 1) {
                              setActiveSection(sections[currentIndex + 1].id);
                            }
                          }}
                          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BusinessPlanPage;