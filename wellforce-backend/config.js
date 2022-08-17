require("dotenv").config();
require("colors");

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
const SECRET_KEY = process.env.SECRET_KEY || "secret_dev";
const IS_TESTING = process.env.NODE_ENV === "test";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const EMAIL_SERVICE_ACTIVE = IS_TESTING ? false : process.env.EMAIL_SERVICE_ACTIVE === "active"

function getDatabaseUri() {
  const dbUser = process.env.DATABASE_USER || "abdirahman.ali";
  const dbPass = process.env.DATABASE_PASS
    ? encodeURI(process.env.DATABASE_PASS)
    : "postgres";
  const dbHost = process.env.DATABASE_HOST || "localhost";
  const dbPort = process.env.DATABASE_PORT || 5432;
  const dbProdName = process.env.DATABASE_NAME || "wellforce";
  const dbTestName = process.env.DATABASE_TEST_NAME || "wellforce_test";
  const dbName = process.env.NODE_ENV === "test" ? dbTestName : dbProdName;

  return (
    process.env.DATABASE_URL ||
    `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
  );
}

const BCRYPT_WORK_FACTOR = 13;

console.log("wellforce".green);
console.log("PORT:".blue, PORT);
console.log("SECRET_KEY:".blue, SECRET_KEY);
console.log("SENDGRID_API_KEY:".blue, SENDGRID_API_KEY);
console.log("EMAIL_SERVICE_ACTIVE:".blue, EMAIL_SERVICE_ACTIVE);
console.log("BCRYPT_WORK_FACTOR:".blue, BCRYPT_WORK_FACTOR);
console.log("Database URI:".blue, getDatabaseUri());
console.log("---");

module.exports = {
  PORT,
  SECRET_KEY,
  IS_TESTING,
  SENDGRID_API_KEY,
  EMAIL_SERVICE_ACTIVE,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
};
