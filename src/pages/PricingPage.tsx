import React from 'react';
import PricingSection from '../components/PricingSection';
import CTA from '../components/CTA';

const PricingPage: React.FC = () => {
  return (
    <div>
      <div className="bg-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Simple, transparent pricing
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-blue-200">
              Choose the plan that's right for your business and unlock your funding potential today.
            </p>
          </div>
        </div>
      </div>
      <PricingSection />
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Frequently asked questions</h2>
            <p className="mt-4 text-lg text-gray-500">
              Have questions about our pricing or features? We've got answers.
            </p>
          </div>
          <div className="mt-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What's included in the free plan?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  The free plan includes basic funding search functionality, limited to 10 results per search, email notifications for new opportunities, and a basic account dashboard.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Can I cancel my premium subscription anytime?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Yes, you can cancel your premium subscription at any time. Your premium features will remain active until the end of your current billing period.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Is there a contract or commitment?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  No, our premium plan is billed monthly with no long-term contract or commitment. You can upgrade, downgrade, or cancel at any time.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What payment methods do you accept?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also support payment via PayPal.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  How often is the funding database updated?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Our funding database is updated daily with new opportunities from government agencies, private foundations, and investors across the country.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What is the business plan builder tool?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  The business plan builder is a premium feature that guides you through creating a professional business plan with all the sections funders expect to see, complete with templates and examples.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <CTA />
    </div>
  );
};

export default PricingPage;