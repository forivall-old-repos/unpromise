module.exports = function(promise, callback) {
  promise.then(function(val) {
    callback(null, val);
  }, function(err) {
    // Yes I know I could just stick the callback
    // as the arg here but I want to be explicit!
    callback(err);
  });
};
