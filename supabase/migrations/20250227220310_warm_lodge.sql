/*
  # Create funding-related tables and security policies

  1. New Tables
    - `funding_opportunities` - Stores funding opportunities data
    - `saved_opportunities` - Tracks which opportunities users have saved
  2. Security
    - Enable RLS on all tables
    - Add policies for users to access their own data
*/

-- Create funding opportunities table
CREATE TABLE IF NOT EXISTS funding_opportunities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  provider TEXT NOT NULL,
  amount TEXT NOT NULL,
  deadline TEXT NOT NULL,
  description TEXT NOT NULL,
  eligibility TEXT NOT NULL,
  category TEXT NOT NULL,
  type TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS on funding_opportunities
ALTER TABLE funding_opportunities ENABLE ROW LEVEL SECURITY;

-- Create policy for reading funding opportunities (public read)
CREATE POLICY "Anyone can view funding opportunities"
  ON funding_opportunities
  FOR SELECT
  USING (true);

-- Create saved opportunities junction table
CREATE TABLE IF NOT EXISTS saved_opportunities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  opportunity_id UUID NOT NULL REFERENCES funding_opportunities(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, opportunity_id)
);

-- Enable RLS on saved_opportunities
ALTER TABLE saved_opportunities ENABLE ROW LEVEL SECURITY;

-- Create policies for saved_opportunities
CREATE POLICY "Users can view their own saved opportunities"
  ON saved_opportunities
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own saved opportunities"
  ON saved_opportunities
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own saved opportunities"
  ON saved_opportunities
  FOR DELETE
  USING (auth.uid() = user_id);

-- Insert sample funding opportunities
INSERT INTO funding_opportunities (title, provider, amount, deadline, description, eligibility, category, type)
VALUES
  ('Small Business Innovation Research (SBIR)', 'National Science Foundation', '$50,000 - $250,000', '2025-06-30', 'Funding for small businesses to engage in federal research and development with potential for commercialization.', 'Small businesses with fewer than 500 employees', 'Research & Development', 'grant'),
  ('Economic Development Administration (EDA) Grants', 'U.S. Department of Commerce', '$100,000 - $3,000,000', '2025-05-15', 'Funding to support economic development, innovation, and job creation in economically distressed communities.', 'State and local governments, nonprofits, educational institutions', 'Economic Development', 'grant'),
  ('Rural Business Development Grants', 'USDA', '$10,000 - $500,000', '2025-04-30', 'Grants to support targeted technical assistance, training, and other activities leading to the development of small businesses in rural areas.', 'Rural public entities, nonprofits, and federally recognized tribes', 'Rural Development', 'grant'),
  ('SBA 7(a) Loan Program', 'Small Business Administration', 'Up to $5,000,000', 'Ongoing', 'The SBA''s primary program for providing financial assistance to small businesses.', 'For-profit businesses meeting SBA size standards', 'Business Expansion', 'loan'),
  ('State Trade Expansion Program (STEP)', 'Small Business Administration', 'Varies by state', '2025-07-31', 'Grants to support small business export development activities.', 'Small businesses meeting SBA size standards', 'International Trade', 'grant'),
  ('Growth Accelerator Fund Competition', 'Small Business Administration', '$50,000', '2025-05-15', 'Funding for accelerators, incubators, and other entrepreneurial ecosystem models.', 'Accelerators, incubators, co-working spaces', 'Entrepreneurship', 'grant'),
  ('Angel Investment Network', 'Private Investors', '$50,000 - $1,000,000', 'Ongoing', 'Early-stage investment for startups with high growth potential.', 'Startups with scalable business models', 'Startup Funding', 'investment'),
  ('Community Development Block Grant', 'Department of Housing and Urban Development', 'Varies by location', '2025-08-15', 'Funding for community development activities including infrastructure, housing, and economic development.', 'Local governments, states, and nonprofits', 'Community Development', 'grant');