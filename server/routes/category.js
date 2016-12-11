const Category = require('../controllers/category');
const Auth = require('../utils');

module.exports = function(app) {
  app.route('/api/category')
      .get(Category.fetch)
      .post(Auth.authenticate, Category.create);

  app.route('/api/category/:category')
      .put(Auth.authenticate, Category.update)
      .delete(Auth.authenticate, Category.delete);
}