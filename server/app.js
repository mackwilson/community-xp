/* - - - - - - - - - - - - - - - - - - - - - - - - - - -
Local file: app.local.js 
Deployed to AWS Lambda: app.js 
- - - - - - - - - - - - - - - - - - - - - - - - - - - */

const sls = require('serverless-http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const model = require('./db/resourceModel');
const http = require('./util/httpUtil');

const app = express();
const port = process.env.PORT || 8000;
model.init();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods: GET");
  next();
});
app.use(cors());
app.use(bodyParser.json());


/* - - - - - - - - - - - - - - Routes - - - - - - - - - - - - - - - */
app.get('/ping', function(req, res) {
  http.sendResponse(res, "OK", 200);
});

app.get('/v1/resource/all', function(req, res) {
  console.info("GET " + req.originalUrl);
  model.getAllResources().then(function(results) {
    http.sendResponse(res, "Success", 200, results);
  }).catch(function(ex) {
    console.error(ex);
    http.sendResponse(res, "Server Error", 500);
  });
});

app.get('/v1/resource/id/:id', function(req, res) {
  console.info("GET " + req.originalUrl);
  model.getResourceById(req.params.id).then(function(result) {
    if (result) {
      http.sendResponse(res, "Success", 200, result);
    } else {
      http.sendResponse(res, "Could not find resource with id: " + req.params.id, 404)
    }
  }).catch(function(ex) {
    console.error("GET " + req.originalUrl + " --> " + ex);
    http.sendResponse(res, "Server Error", 500);
  });
});

app.get('/v1/resource/name/:name', function(req, res) {
  console.info("GET " + req.originalUrl);
  model.getResourceByName(req.params.name).then(function(result) {
    if (result) {
      http.sendResponse(res, "Success", 200, result);
    } else {
      http.sendResponse(res, "Could not find resource with name: " + req.params.name, 404)
    }
  }).catch(function(ex) {
    console.error("GET " + req.originalUrl + " --> " + ex);
    http.sendResponse(res, "Server Error", 500);
  });
});
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


module.exports.server = sls(app);
