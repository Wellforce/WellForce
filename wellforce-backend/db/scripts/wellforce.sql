\echo "Delete and recreate wellforce database"
\prompt "Return for yes or control-C to cancel " answer

DROP DATABASE wellforce;
CREATE DATABASE wellforce;
\connect wellforce;


\i wellforce-schema.sql
\i populate.sql

