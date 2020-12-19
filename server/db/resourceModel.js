const { Pool, Client } = require('pg');
const config = require('../config/config');

const obj = {};
let pool;

obj.init= function () {
  pool = new Pool({
    user: config.resources.user,
    host: config.resources.host,
    database: config.resources.database,
    port: config.resources.port,
    password: config.resources.password
  });
}

obj.getAllResources = function() {
  return pool
  .query('SELECT * FROM resources;')
  .then(function(res) {
    return res.rows;
  })
}

obj.getResourceById = function(id) {
  return pool
    .query('SELECT * FROM resources WHERE id=$1', [id])
    .then(function(res) {
      return res.rows[0];
    });
}

obj.getResourceByName = function(name) {
  return pool
    .query('SELECT * FROM resources WHERE resource_name=$1', [name])
    .then(function(res) {
      return res.rows[0];
    });
}

module.exports = obj;