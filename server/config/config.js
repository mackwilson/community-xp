const obj = {
  resources: {
    user: process.env.RESOURCE_DB_USER || "postgres",
    host: process.env.RESOURCE_DB_HOST || "127.0.0.1",
    database: process.env.RESOURCE_DB_NAME || "resources",
    port: process.env.RESOURCE_DB_PORT || 5432,
    password: process.env.RESOURCE_DB_PWD
  }
}

module.exports = obj;