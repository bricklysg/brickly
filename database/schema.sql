
DROP TABLE IF EXISTS properties, agents, admins;

CREATE TABLE IF NOT EXISTS agents (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role TEXT DEFAULT 'agent'
);

CREATE TABLE IF NOT EXISTS admins (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role TEXT DEFAULT 'admin'
);

CREATE TABLE IF NOT EXISTS properties (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  price INTEGER NOT NULL,
  property_type TEXT NOT NULL,
  bedrooms INTEGER NOT NULL,
  listing_type TEXT NOT NULL,
  image_url TEXT NOT NULL,
  agent_id INTEGER REFERENCES agents(id),
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
