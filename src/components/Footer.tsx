import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">FundingFinder</span>
            </div>
            <p className="mt-2 text-sm text-gray-300">
              Connecting businesses with the funding opportunities they need to grow and succeed.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/blog" className="text-base text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-base text-gray-300 hover:text-white">
                  Funding Guides
                </Link>
              </li>
              <li>
                <Link to="/webinars" className="text-base text-gray-300 hover:text-white">
                  Webinars
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-base text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/about" className="text-base text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-base text-gray-300 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-base text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-base text-gray-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <a href="mailto:info@fundingfinder.com" className="text-base text-gray-300 hover:text-white">
                  info@fundingfinder.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <a href="tel:+18005551234" className="text-base text-gray-300 hover:text-white">
                  (800) 555-1234
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-1" />
                <span className="text-base text-gray-300">
                  123 Business Ave<br />
                  Suite 500<br />
                  San Francisco, CA 94107
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} FundingFinder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;