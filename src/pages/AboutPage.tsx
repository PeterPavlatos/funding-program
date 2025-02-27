import React from 'react';
import { Users, Award, Clock, DollarSign } from 'lucide-react';
import CTA from '../components/CTA';

const AboutPage: React.FC = () => {
  return (
    <div>
      <div className="bg-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              About FundingFinder
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-blue-200">
              Our mission is to connect businesses with the funding they need to grow and succeed.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Story</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Bridging the funding gap for businesses
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              FundingFinder was founded in 2020 with a simple goal: make it easier for businesses to find and secure the funding they need to thrive.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="text-lg leading-6 font-medium text-gray-900">The Problem</div>
                <p className="mt-2 text-base text-gray-500">
                  Every year, billions of dollars in government grants, loans, and private investment go unclaimed because businesses don't know they exist or struggle with complex application processes. Small and medium-sized businesses are particularly disadvantaged, lacking the resources to navigate the fragmented funding landscape.
                </p>
              </div>
              <div className="relative">
                <div className="text-lg leading-6 font-medium text-gray-900">Our Solution</div>
                <p className="mt-2 text-base text-gray-500">
                  We built a comprehensive platform that aggregates funding opportunities from thousands of sources, matches businesses with the right opportunities based on their profile, and provides the tools and resources needed to successfully apply for and secure funding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Values</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What drives us every day
            </p>
          </div>
          
          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Accessibility</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  We believe funding opportunities should be accessible to all businesses, regardless of size, industry, or location.
                </p>
              </div>
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Award className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Excellence</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  We strive for excellence in everything we do, from the accuracy of our database to the quality of our customer support.
                </p>
              </div>
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Clock className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Efficiency</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  We value our users' time and work to make the funding search and application process as efficient as possible.
                </p>
              </div>
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <DollarSign className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Impact</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  We measure our success by the real-world impact we have on businesses and the communities they serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Team</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet the people behind FundingFinder
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our diverse team brings together expertise in finance, technology, and business development.
            </p>
          </div>
          
          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="text-center">
                <div className="mx-auto h-20 w-20 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Sarah Johnson"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-medium text-gray-900">Sarah Johnson</h3>
                  <p className="text-sm text-blue-600">CEO & Co-Founder</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Former SBA advisor with 15+ years of experience in business funding.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="mx-auto h-20 w-20 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Michael Chen"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-medium text-gray-900">Michael Chen</h3>
                  <p className="text-sm text-blue-600">CTO & Co-Founder</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Tech entrepreneur with multiple successful startups in fintech.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="mx-auto h-20 w-20 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="David Rodriguez"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-medium text-gray-900">David Rodriguez</h3>
                  <p className="text-sm text-blue-600">Head of Business Development</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Former investment banker specializing in small business funding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTA />
    </div>
  );
};

export default AboutPage;