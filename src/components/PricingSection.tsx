import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { pricingPlans } from '../data/mockData';

const PricingSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Choose the right plan for your business
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Start with our free plan or upgrade to premium for advanced features.
          </p>
        </div>

        <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative p-8 bg-white border rounded-2xl shadow-sm flex flex-col ${
                plan.isPopular ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-200'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 bg-blue-500 rounded-full px-4 py-1 text-sm font-semibold text-white">
                  Most Popular
                </div>
              )}
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                  {plan.id !== 'free' && (
                    <span className="ml-1 text-xl font-semibold">/month</span>
                  )}
                </p>
                <p className="mt-6 text-gray-500">
                  {plan.id === 'free' ? 'Everything you need to get started' : 'Everything in Free, plus advanced features'}
                </p>

                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={plan.id === 'free' ? '/register' : '/register?plan=premium'}
                className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${
                  plan.isPopular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                }`}
              >
                {plan.id === 'free' ? 'Sign up for free' : 'Upgrade to Premium'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;