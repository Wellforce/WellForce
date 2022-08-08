\c wellforce
DROP TABLE IF EXISTS preferences CASCADE;

CREATE TABLE preferences(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    activity_name TEXT REFERENCES activities(name)
);

\COPY users(username, password, first_name, last_name, email) FROM '../starter_data/users.csv' DELIMITER ',' CSV HEADER;
\COPY activities(name) FROM '../starter_data/activities.csv' DELIMITER ',' CSV HEADER;
\COPY preferences(user_id, activity_name) FROM '../starter_data/prefs.csv' DELIMITER ',' CSV HEADER;