import React from 'react';
import { DollarSign, Users, Award, Clock } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      id: 1,
      stat: '$2.5B+',
      emphasis: 'Funding secured',
      description: 'for our clients since 2020',
      icon: DollarSign,
    },
    {
      id: 2,
      stat: '15,000+',
      emphasis: 'Businesses',
      description: 'using our platform',
      icon: Users,
    },
    {
      id: 3,
      stat: '8,500+',
      emphasis: 'Funding opportunities',
      description: 'in our database',
      icon: Award,
    },
    {
      id: 4,
      stat: '72 hours',
      emphasis: 'Average time',
      description: 'to find suitable funding',
      icon: Clock,
    },
  ];

  return (
    <div className="bg-blue-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Trusted by businesses across the country
          </h2>
          <p className="mt-3 text-xl text-blue-200 sm:mt-4">
            Our platform has helped thousands of businesses secure the funding they need to grow.
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-8 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col p-6 bg-blue-700 rounded-lg shadow-lg">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-6 w-6 text-blue-300" />
                </div>
                <span className="font-bold text-white">{stat.emphasis}</span> {stat.description}
              </dt>
              <dd className="order-1 text-4xl font-extrabold text-white">{stat.stat}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Stats;