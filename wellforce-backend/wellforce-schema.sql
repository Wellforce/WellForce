CREATE TABLE users (
id          SERIAL PRIMARY KEY,
username    TEXT NOT NULL,
password    TEXT NOT NULL,
first_name  TEXT NOT NULL,
last_name   TEXT NOT NULL,
email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN EMAIL) > 1),
created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
updated_at  TIMESTAMP DEFAULT NOW()
);

CREATE TABLE activities(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE preferences(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    activity_name TEXT REFERENCES activities(name)
    

);
