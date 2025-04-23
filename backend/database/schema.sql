-- Users Table
CREATE EXTENSION IF NOT EXISTS citext;  -- Enable case-insensitive text extension
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email CITEXT UNIQUE NOT NULL,  -- Case-insensitive email
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) CHECK (role IN ('farmer', 'admin', 'mandi_user')) NOT NULL,
    cnic VARCHAR(20),
    city VARCHAR(100),
    shop_name VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Govt Schemes Table
CREATE TABLE IF NOT EXISTS schemes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    apply_link TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Machines Table
CREATE TABLE IF NOT EXISTS machines (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    image_url TEXT,
    price DECIMAL(10,2) NOT NULL,
    city VARCHAR(100) NOT NULL,
    status VARCHAR(20) CHECK (status IN ('available', 'sold')) DEFAULT 'available',  -- Track availability
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Lands Table
CREATE TABLE IF NOT EXISTS lands (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    location VARCHAR(255) NOT NULL,
    area DECIMAL(10,2) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    city VARCHAR(100) NOT NULL,
    status VARCHAR(20) CHECK (status IN ('available', 'sold')) DEFAULT 'available',  -- Track availability
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seeds Table
CREATE TABLE IF NOT EXISTS seeds (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(10) CHECK (type IN ('buy', 'sell')) NOT NULL,
    quantity INT NOT NULL,
    city VARCHAR(100) NOT NULL,
    status VARCHAR(20) CHECK (status IN ('available', 'sold')) DEFAULT 'available',  -- Track availability
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Mandi Rates Table
CREATE TABLE IF NOT EXISTS mandi_rates (
    id SERIAL PRIMARY KEY,
    mandi_user_id INT REFERENCES users(id) ON DELETE CASCADE,
    item_name VARCHAR(255) NOT NULL,
    rate DECIMAL(10,2) NOT NULL,
    city VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Track history of price changes
);

-- Announcements Table (New Feature)
CREATE TABLE IF NOT EXISTS announcements (
    id SERIAL PRIMARY KEY,
    admin_id INT REFERENCES users(id) ON DELETE CASCADE,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for Faster Searching & Filtering
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_machines_city ON machines(city);
CREATE INDEX idx_machines_price ON machines(price);
CREATE INDEX idx_lands_city ON lands(city);
CREATE INDEX idx_lands_price ON lands(price);
CREATE INDEX idx_seeds_city ON seeds(city);
CREATE INDEX idx_seeds_name ON seeds(name);


-- run query 
-- psql -U postgres -d agriculture_db -f database/schema.sql
