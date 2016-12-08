const Disney = require('../controllers/disney');
module.exports = function(app) {
  app.get('/api/disney', function(req, res) {
    Disney(function(error, response) {
      if (error) {
        res.status(500).send({error: 'An error occured!'})
      } else {
        res.status(200).send(response)
      }
    })
  })
}