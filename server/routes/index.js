module.exports = function(app) {
  require('./disney')(app);
  require('./tv_shows')(app);
  require('./movies')(app)
}