const {Client} = require("pg");

const SQL=`
CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role VARCHAR(20) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS issues(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    lat DOUBLE PRECISION NOT NULL,
    lng DOUBLE PRECISION NOT NULL,
    created_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users(name, email, password_hash, role) VALUES
    ('admin', 'admin@admin.com', 'adminpwd', 'admin'),
    ('user1', 'user1@email.com', 'user1pwd', 'user');

INSERT INTO issues (title, description, status, lat, lng, created_by) VALUES
    ('Broken Streetlight', 'Streetlight not working near park.', 'Pending', 19.0760, 72.8777, 2),
    ('Pothole', 'Large pothole on main road.', 'In Progress', 19.1120, 72.8650, 2);
`;

async function main(params) {
    console.log('seeding...');
    const client = new Client({connectionString : "postgresql://postgres:troubador1@localhost:5432/problem_mapper"});
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('Done');
}

main();