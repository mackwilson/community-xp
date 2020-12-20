module.exports.sendResponse = function(res, msg, status, data) {
  try {
    res.setHeader('Content-Type', 'application/json');
    res.status(status).json({status:status,msg:msg,data:data});
  } catch(err) {
    errorMsg = "Encountered error sending response: " + err;
    res.status(500).json({status:500,msg:errorMsg});
  }
}