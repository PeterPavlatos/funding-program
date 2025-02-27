import React from 'react';
import { Bell, Mail, Calendar, ExternalLink } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';

const NotificationsPage: React.FC = () => {
  const notifications = [
    {
      id: 1,
      type: 'deadline',
      title: 'Application Deadline Approaching',
      message: 'The deadline for Small Business Innovation Research (SBIR) grant is in 5 days.',
      date: '2025-06-25',
      read: false,
      icon: Calendar
    },
    {
      id: 2,
      type: 'new',
      title: 'New Funding Opportunity',
      message: 'A new grant matching your business profile has been added: Rural Business Development Grant.',
      date: '2025-06-20',
      read: false,
      icon: Mail
    },
    {
      id: 3,
      type: 'update',
      title: 'Application Status Update',
      message: 'Your application for the SBA 7(a) Loan Program has moved to the review stage.',
      date: '2025-06-18',
      read: true,
      icon: ExternalLink
    },
    {
      id: 4,
      type: 'new',
      title: 'New Funding Opportunity',
      message: 'A new investment opportunity matching your business profile has been added: Angel Investment Network.',
      date: '2025-06-15',
      read: true,
      icon: Mail
    },
    {
      id: 5,
      type: 'update',
      title: 'Webinar Invitation',
      message: 'Join our upcoming webinar: "How to Write a Winning Grant Proposal" on July 5, 2025.',
      date: '2025-06-10',
      read: true,
      icon: Bell
    }
  ];

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Notifications</h1>
          <div className="flex space-x-3">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Mark all as read
            </button>
          </div>
        </div>
        
        <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {notifications.map((notification) => (
              <li key={notification.id} className={notification.read ? 'bg-white' : 'bg-blue-50'}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 rounded-md p-2 ${
                      notification.type === 'deadline' 
                        ? 'bg-yellow-100 text-yellow-600' 
                        : notification.type === 'new'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      <notification.icon className="h-5 w-5" />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">
                          {notification.title}
                        </p>
                        <p className="ml-2 text-xs text-gray-500">
                          {new Date(notification.date).toLocaleDateString()}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {notification.message}
                      </p>
                    </div>
                    {!notification.read && (
                      <div className="ml-4 flex-shrink-0">
                        <span className="inline-block h-2 w-2 rounded-full bg-blue-600"></span>
                      </div>
                    )}
                  </div>
                  <div className="mt-2 flex justify-end">
                    <button
                      type="button"
                      className="text-xs text-blue-600 hover:text-blue-800"
                    >
                      {notification.read ? 'Mark as unread' : 'Mark as read'}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NotificationsPage;