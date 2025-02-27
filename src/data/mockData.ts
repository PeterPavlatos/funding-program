import { FundingOpportunity, PricingPlan, User } from '../types';

export const mockFundingOpportunities: FundingOpportunity[] = [
  {
    id: '1',
    title: 'Small Business Innovation Research (SBIR)',
    provider: 'National Science Foundation',
    amount: '$50,000 - $250,000',
    deadline: '2025-06-30',
    description: 'Funding for small businesses to engage in federal research and development with potential for commercialization.',
    eligibility: 'Small businesses with fewer than 500 employees',
    category: 'Research & Development',
    type: 'grant'
  },
  {
    id: '2',
    title: 'Economic Development Administration (EDA) Grants',
    provider: 'U.S. Department of Commerce',
    amount: '$100,000 - $3,000,000',
    deadline: '2025-05-15',
    description: 'Funding to support economic development, innovation, and job creation in economically distressed communities.',
    eligibility: 'State and local governments, nonprofits, educational institutions',
    category: 'Economic Development',
    type: 'grant'
  },
  {
    id: '3',
    title: 'Rural Business Development Grants',
    provider: 'USDA',
    amount: '$10,000 - $500,000',
    deadline: '2025-04-30',
    description: 'Grants to support targeted technical assistance, training, and other activities leading to the development of small businesses in rural areas.',
    eligibility: 'Rural public entities, nonprofits, and federally recognized tribes',
    category: 'Rural Development',
    type: 'grant'
  },
  {
    id: '4',
    title: 'SBA 7(a) Loan Program',
    provider: 'Small Business Administration',
    amount: 'Up to $5,000,000',
    deadline: 'Ongoing',
    description: 'The SBA\'s primary program for providing financial assistance to small businesses.',
    eligibility: 'For-profit businesses meeting SBA size standards',
    category: 'Business Expansion',
    type: 'loan'
  },
  {
    id: '5',
    title: 'State Trade Expansion Program (STEP)',
    provider: 'Small Business Administration',
    amount: 'Varies by state',
    deadline: '2025-07-31',
    description: 'Grants to support small business export development activities.',
    eligibility: 'Small businesses meeting SBA size standards',
    category: 'International Trade',
    type: 'grant'
  },
  {
    id: '6',
    title: 'Growth Accelerator Fund Competition',
    provider: 'Small Business Administration',
    amount: '$50,000',
    deadline: '2025-05-15',
    description: 'Funding for accelerators, incubators, and other entrepreneurial ecosystem models.',
    eligibility: 'Accelerators, incubators, co-working spaces',
    category: 'Entrepreneurship',
    type: 'grant'
  },
  {
    id: '7',
    title: 'Angel Investment Network',
    provider: 'Private Investors',
    amount: '$50,000 - $1,000,000',
    deadline: 'Ongoing',
    description: 'Early-stage investment for startups with high growth potential.',
    eligibility: 'Startups with scalable business models',
    category: 'Startup Funding',
    type: 'investment'
  },
  {
    id: '8',
    title: 'Community Development Block Grant',
    provider: 'Department of Housing and Urban Development',
    amount: 'Varies by location',
    deadline: '2025-08-15',
    description: 'Funding for community development activities including infrastructure, housing, and economic development.',
    eligibility: 'Local governments, states, and nonprofits',
    category: 'Community Development',
    type: 'grant'
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    features: [
      'Basic funding search',
      'Limited results (10 per search)',
      'Email notifications for new opportunities',
      'Basic account dashboard'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$97',
    isPopular: true,
    features: [
      'Advanced funding search with filters',
      'Unlimited search results',
      'Priority email notifications',
      'Business plan builder tool',
      'Grant application templates',
      'One-on-one consultation (30 min)',
      'Funding opportunity tracking'
    ]
  }
];

export const mockUser: User = {
  id: '1',
  email: 'user@example.com',
  name: 'John Doe',
  isPremium: false
};