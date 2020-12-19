const model = require('./db/resourceModel');
const bodyParser = require('body-parser');
const cors = require('cors');


module.exports = function(router, config) {
  router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods: GET");
    next();
  });
  router.use(cors());
  router.use(bodyParser.json());
  
  model.init();
  
  router.get('/resource/all', function(req, res) {
    model.getAllResources().then(function(results) {
      res.status(200).send(results);
    }).catch(function(ex) {
      console.error(ex);
      res.status(500).send("server error");
    });
  });

  router.get('/resource/id', function(req, res) {
    model.getResourceById(req.query.id).then(function(result) {
      res.status(200).send(result);
    }).catch(function(ex) {
      console.error(ex);
      res.status(500).send("server error");
    });
  });

  router.get('/resource/name', function(req, res) {
    model.getResourceByName(req.query.name).then(function(result) {
      res.status(200).send(result);
    }).catch(function(ex) {
      console.error(ex);
      res.status(500).send("server error");
    });
  });
}
