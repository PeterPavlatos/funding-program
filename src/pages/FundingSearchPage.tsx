import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { mockFundingOpportunities } from '../data/mockData';
import { FundingOpportunity } from '../types';
import DashboardLayout from '../components/DashboardLayout';

const FundingSearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Get unique categories and types for filters
  const categories = Array.from(new Set(mockFundingOpportunities.map(item => item.category)));
  const types = Array.from(new Set(mockFundingOpportunities.map(item => item.type)));
  
  const filteredOpportunities = mockFundingOpportunities.filter(opportunity => {
    const matchesSearch = searchTerm === '' || 
      opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opportunity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opportunity.provider.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(opportunity.type);
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(opportunity.category);
    
    return matchesSearch && matchesType && matchesCategory;
  });
  
  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };
  
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  const clearFilters = () => {
    setSelectedTypes([]);
    setSelectedCategories([]);
    setSearchTerm('');
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-2xl font-semibold text-gray-900">Funding Search</h1>
          
          <div className="mt-6">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="w-full md:w-2/3 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search for funding opportunities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="mt-3 md:mt-0 flex">
                <button
                  type="button"
                  onClick={() => setShowFilters(!showFilters)}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Filter className="-ml-1 mr-2 h-5 w-5 text-gray-400" />
                  Filters
                </button>
                
                {(selectedTypes.length > 0 || selectedCategories.length > 0) && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <X className="-ml-1 mr-2 h-5 w-5 text-gray-400" />
                    Clear filters
                  </button>
                )}
              </div>
            </div>
            
            {showFilters && (
              <div className="mt-4 bg-white p-4 rounded-md shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Funding Type</h3>
                    <div className="mt-2 space-y-2">
                      {types.map((type) => (
                        <div key={type} className="flex items-center">
                          <input
                            id={`type-${type}`}
                            name={`type-${type}`}
                            type="checkbox"
                            checked={selectedTypes.includes(type)}
                            onChange={() => toggleType(type)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor={`type-${type}`} className="ml-3 text-sm text-gray-700 capitalize">
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Category</h3>
                    <div className="mt-2 space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center">
                          <input
                            id={`category-${category}`}
                            name={`category-${category}`}
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => toggleCategory(category)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor={`category-${category}`} className="ml-3 text-sm text-gray-700">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-6">
              <h2 className="text-lg font-medium text-gray-900">
                {filteredOpportunities.length} {filteredOpportunities.length === 1 ? 'Result' : 'Results'}
              </h2>
              
              <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {filteredOpportunities.map((opportunity: FundingOpportunity) => (
                    <li key={opportunity.id}>
                      <div className="px-4 py-5 sm:px-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-blue-600 truncate">
                            {opportunity.title}
                          </h3>
                          <div className="ml-2 flex-shrink-0 flex">
                            <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              opportunity.type === 'grant' 
                                ? 'bg-green-100 text-green-800' 
                                : opportunity.type === 'loan'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-purple-100 text-purple-800'
                            }`}>
                              {opportunity.type.charAt(0).toUpperCase() + opportunity.type.slice(1)}
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="flex items-center text-sm text-gray-500">
                              {opportunity.provider}
                            </p>
                            <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                              {opportunity.amount}
                            </p>
                          </div>
                          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                            <p>
                              Deadline: {opportunity.deadline === 'Ongoing' ? 'Ongoing' : new Date(opportunity.deadline).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">{opportunity.description}</p>
                        <div className="mt-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mr-2">
                            {opportunity.category}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {opportunity.eligibility}
                          </span>
                        </div>
                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            View Details
                          </button>
                          <button
                            type="button"
                            className="ml-3 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FundingSearchPage;