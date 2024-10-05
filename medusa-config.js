const dotenv = require("dotenv");

let ENV_FILE_NAME = "";
switch (process.env.NODE_ENV) {
  case "production":
    ENV_FILE_NAME = ".env.production";
    break;
  case "staging":
    ENV_FILE_NAME = ".env.staging";
    break;
  case "test":
    ENV_FILE_NAME = ".env.test";
    break;
  case "development":
  default:
    ENV_FILE_NAME = ".env";
    break;
}

try {
  dotenv.config({ path: process.cwd() + "/" + ENV_FILE_NAME });
} catch (e) {}

// CORS when consuming Medusa from admin
const ADMIN_CORS =
  process.env.ADMIN_CORS || "http://localhost:7000,http://localhost:7001";

// CORS to avoid issues when consuming Medusa from a client
const STORE_CORS = process.env.STORE_CORS || "http://localhost:8000";

const DATABASE_URL =
<<<<<<< HEAD
  process.env.DATABASE_URL || "postgres://postgres:medusadb@medusa1_medusa-db:5432/medusa1";
=======
  process.env.DATABASE_URL || "postgres://localhost/medusa-starter-default";
>>>>>>> 3a8fa43 (Initial commit)

const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

const plugins = [
  `medusa-fulfillment-manual`,
  `medusa-payment-manual`,
  {
    resolve: `@medusajs/file-local`,
    options: {
      upload_dir: "uploads",
    },
  },
  {
    resolve: "@medusajs/admin",
    /** @type {import('@medusajs/admin').PluginOptions} */
    options: {
      autoRebuild: true,
      develop: {
        open: process.env.OPEN_BROWSER !== "false",
      },
    }, // Close the @medusajs/admin options here
  },
  {
    resolve: 'medusa-custom-attributes',
    options: {
      enableUI: true, // Enable the admin panel UI for managing attributes
      projectConfig: {
        store_cors: STORE_CORS, // Your store's CORS configuration
        admin_cors: ADMIN_CORS, // Your admin panel's CORS configuration
      },
    },
  },
  {
    resolve: 'medusa-custom-attributes',
    options: {
      enableUI: true, // Enable the admin panel UI for managing attributes
      projectConfig: {
        store_cors: STORE_CORS, // Your store's CORS configuration
        admin_cors: ADMIN_CORS, // Your admin panel's CORS configuration
      },
    },
  },
];

const modules = {
  /*eventBus: {
    resolve: "@medusajs/event-bus-redis",
    options: {
      redisUrl: REDIS_URL
    }
  },
  cacheService: {
    resolve: "@medusajs/cache-redis",
    options: {
      redisUrl: REDIS_URL
    }
  },*/
};

/** @type {import('@medusajs/medusa').ConfigModule["projectConfig"]} */
const projectConfig = {
  jwt_secret: process.env.JWT_SECRET || "supersecret",
  cookie_secret: process.env.COOKIE_SECRET || "supersecret",
  store_cors: STORE_CORS,
  database_url: DATABASE_URL,
  admin_cors: ADMIN_CORS,
  // Uncomment the following lines to enable REDIS
<<<<<<< HEAD
<<<<<<< HEAD
   redis_url: REDIS_URL
=======
  // redis_url: REDIS_URL
>>>>>>> 3a8fa43 (Initial commit)
=======
  redis_url: REDIS_URL
>>>>>>> 340174b (Your commit message)
};

/** @type {import('@medusajs/medusa').ConfigModule} */
module.exports = {
  projectConfig,
  plugins,
  modules,
};
