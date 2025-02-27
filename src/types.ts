export interface User {
  id: string;
  email: string;
  name: string;
  isPremium: boolean;
}

export interface FundingOpportunity {
  id: string;
  title: string;
  provider: string;
  amount: string;
  deadline: string;
  description: string;
  eligibility: string;
  category: string;
  type: 'grant' | 'loan' | 'investment';
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface AuthUser {
  id: string;
  email: string;
  name?: string;
  isPremium: boolean;
}