import React, { useState, useEffect } from 'react';
import { User, Settings, Bell, Shield, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import { mockUser } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || mockUser.name,
    email: user?.email || mockUser.email,
    companyName: '',
    industry: 'Technology',
    notifyNewOpportunities: true,
    notifyDeadlines: true,
    notifyUpdates: true,
    notifyWeekly: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    if (user) {
      setFormData(prevData => ({
        ...prevData,
        name: user.name || prevData.name,
        email: user.email
      }));
    }
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ text: '', type: '' });

    try {
      if (!user) throw new Error('User not authenticated');

      const { error } = await supabase
        .from('profiles')
        .update({ 
          name: formData.name,
          updated_at: new Date()
        })
        .eq('id', user.id);

      if (error) throw error;
      
      setMessage({ 
        text: 'Profile updated successfully!', 
        type: 'success' 
      });
    } catch (error: any) {
      console.error('Error updating profile:', error);
      setMessage({ 
        text: error.message || 'Failed to update profile', 
        type: 'error' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'preferences', name: 'Preferences', icon: Settings }
  ];

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        
        <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm flex items-center`}
                >
                  <tab.icon className="h-5 w-5 mr-2" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="p-6">
            {message.text && (
              <div className={`mb-4 p-4 rounded-md ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {message.text}
              </div>
            )}
            
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Update your personal and business information.
                </p>
                
                <form className="mt-6 space-y-6" onSubmit={handleProfileUpdate}>
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        disabled
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-50 text-gray-500 sm:text-sm"
                      />
                      <p className="mt-1 text-xs text-gray-500">Email cannot be changed</p>
                    </div>
                    
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        id="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                        Industry
                      </label>
                      <input
                        type="text"
                        name="industry"
                        id="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                      {isLoading ? 'Saving...' : 'Save'}
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900">Notification Settings</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Manage how and when you receive notifications.
                </p>
                
                <form className="mt-6 space-y-6">
                  <fieldset>
                    <legend className="text-base font-medium text-gray-900">Email Notifications</legend>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="notifyNewOpportunities"
                            name="notifyNewOpportunities"
                            type="checkbox"
                            checked={formData.notifyNewOpportunities}
                            onChange={handleInputChange}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="notifyNewOpportunities" className="font-medium text-gray-700">New funding opportunities</label>
                          <p className="text-gray-500">Get notified when new funding opportunities match your profile.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="notifyDeadlines"
                            name="notifyDeadlines"
                            type="checkbox"
                            checked={formData.notifyDeadlines}
                            onChange={handleInputChange}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="notifyDeadlines" className="font-medium text-gray-700">Application deadlines</label>
                          <p className="text-gray-500">Receive reminders about upcoming application deadlines.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="notifyUpdates"
                            name="notifyUpdates"
                            type="checkbox"
                            checked={formData.notifyUpdates}
                            onChange={handleInputChange}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="notifyUpdates" className="font-medium text-gray-700">Application status updates</label>
                          <p className="text-gray-500">Get notified when there are updates to your funding applications.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="notifyWeekly"
                            name="notifyWeekly"
                            type="checkbox"
                            checked={formData.notifyWeekly}
                            onChange={handleInputChange}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="notifyWeekly" className="font-medium text-gray-700">Weekly digest</label>
                          <p className="text-gray-500">Receive a weekly summary of new opportunities and updates.</p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {activeTab === 'security' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900">Security Settings</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Manage your password and account security.
                </p>
                
                <form className="mt-6 space-y-6">
                  <div>
                    <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                      Current Password
                    </label>
                    <input
                      type="password"
                      name="current-password"
                      id="current-password"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                      New Password
                    </label>
                    <input
                      type="password"
                      name="new-password"
                      id="new-password"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      name="confirm-password"
                      id="confirm-password"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {activeTab === 'billing' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900">Billing Information</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Manage your subscription and payment methods.
                </p>
                
                <div className="mt-6 bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Current Plan</h3>
                      <p className="text-sm text-gray-500">
                        {user?.isPremium || mockUser.isPremium ? 'Premium Plan - $97/month' : 'Free Plan'}
                      </p>
                    </div>
                    {!(user?.isPremium || mockUser.isPremium) ? (
                      <Link
                        to="/pricing"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Upgrade to Premium
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Cancel Subscription
                      </button>
                    )}
                  </div>
                </div>
                
                {(user?.isPremium || mockUser.isPremium) && (
                  <div className="mt-6">
                    <h3 className="text-sm font-medium text-gray-900">Payment Method</h3>
                    <div className="mt-2 flex items-center space-x-3">
                      <CreditCard className="h-5 w-5 text-gray-400" />
                      <span className="text-sm text-gray-500">Visa ending in 4242</span>
                      <button
                        type="button"
                        className="text-sm text-blue-600 hover:text-blue-500"
                      >
                        Update
                      </button>
                    </div>
                    
                    <h3 className="mt-6 text-sm font-medium text-gray-900">Billing History</h3>
                    <div className="mt-2 bg-white shadow overflow-hidden sm:rounded-md">
                      <ul className="divide-y divide-gray-200">
                        <li>
                          <div className="px-4 py-4 flex items-center sm:px-6">
                            <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                              <div>
                                <p className="text-sm font-medium text-blue-600 truncate">
                                  Premium Plan - Monthly
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  June 1, 2025
                                </p>
                              </div>
                              <div className="mt-4 flex-shrink-0 sm:mt-0">
                                <p className="text-sm font-medium text-gray-900">$97.00</p>
                              </div>
                            </div>
                            <div className="ml-5 flex-shrink-0">
                              <button
                                type="button"
                                className="text-sm text-blue-600 hover:text-blue-500"
                              >
                                View Receipt
                              </button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="px-4 py-4 flex items-center sm:px-6">
                            <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                              <div>
                                <p className="text-sm font-medium text-blue-600 truncate">
                                  Premium Plan - Monthly
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  May 1, 2025
                                </p>
                              </div>
                              <div className="mt-4 flex-shrink-0 sm:mt-0">
                                <p className="text-sm font-medium text-gray-900">$97.00</p>
                              </div>
                            </div>
                            <div className="ml-5 flex-shrink-0">
                              <button
                                type="button"
                                className="text-sm text-blue-600 hover:text-blue-500"
                              >
                                View Receipt
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'preferences' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900">Application Preferences</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Customize your experience on the platform.
                </p>
                
                <form className="mt-6 space-y-6">
                  <fieldset>
                    <legend className="text-base font-medium text-gray-900">Funding Preferences</legend>
                    <div className="mt-4 space-y-4">
                      <div>
                        <label htmlFor="funding-types" className="block text-sm font-medium text-gray-700">
                          Preferred Funding Types
                        </label>
                        <select
                          id="funding-types"
                          name="funding-types"
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                          multiple
                        >
                          <option value="grant">Grants</option>
                          <option value="loan">Loans</option>
                          <option value="investment">Investments</option>
                          <option value="tax-credit">Tax Credits</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="funding-amount" className="block text-sm font-medium text-gray-700">
                          Funding Amount Range
                        </label>
                        <select
                          id="funding-amount"
                          name="funding-amount"
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                        >
                          <option value="any">Any amount</option>
                          <option value="under-10k">Under $10,000</option>
                          <option value="10k-50k">$10,000 - $50,000</option>
                          <option value="50k-250k">$50,000 - $250,000</option>
                          <option value="250k-1m">$250,000 - $1,000,000</option>
                          <option value="over-1m">Over $1,000,000</option>
                        </select>
                      </div>
                    </div>
                  </fieldset>
                  
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;