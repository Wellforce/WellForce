\c wellforce
DROP TABLE IF EXISTS users CASCADE;
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
DROP TABLE IF EXISTS activities CASCADE;
CREATE TABLE activities(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);
DROP TABLE IF EXISTS preferences CASCADE;

CREATE TABLE preferences(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    activity_name TEXT REFERENCES activities(name)
);



\COPY users(username, password, first_name, last_name, email) FROM '../starter_data/users.csv' DELIMITER ',' CSV HEADER;
\COPY activities(name) FROM '../starter_data/activities.csv' DELIMITER ',' CSV HEADER;
\COPY preferences(user_id, activity_name) FROM '../starter_data/prefs.csv' DELIMITER ',' CSV HEADER;