var password = process.env.PASSWORD;
module.exports = {
  authenticate: function(req, res, next) {
    // Check header or url parameters or post parameters for password
    var token = req.body.password || req.query.password;

    if (token) {
      // Verify password
      if (token !== password) {
        return res.json({
          message: 'Failed to authenticate password.'
        });
      } else {
        next();
      }
    } else {
      // If there is no password
      // return an error
      return res.status(401).send({
        message: 'No password provided.'
      });

    }
  }
};
