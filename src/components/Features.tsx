import React from 'react';
import { Search, FileText, BarChart, DollarSign } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      name: 'Comprehensive Funding Database',
      description: 'Access thousands of government grants, loans, and private investment opportunities updated daily.',
      icon: Search,
    },
    {
      name: 'Business Plan Builder',
      description: 'Create professional business plans with our step-by-step tool designed to impress funders and investors.',
      icon: FileText,
    },
    {
      name: 'Funding Analytics',
      description: 'Track application status, success rates, and funding trends to optimize your strategy.',
      icon: BarChart,
    },
    {
      name: 'Personalized Recommendations',
      description: 'Get matched with the perfect funding opportunities based on your business profile and needs.',
      icon: DollarSign,
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to secure funding
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform provides all the tools and resources you need to find, apply for, and secure the right funding for your business.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;