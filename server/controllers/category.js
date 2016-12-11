var Category = require('../models/category');

module.exports = {
    create: function(req, res) {
      var category = new Category();
      category.title = req.body.title;
      category.values = JSON.parse((req.body.values).replace(/'/gi,'"'));

      category.save(function(err) {
        if (err) {
          if(err.code === 11000) {
              res.status(409).send(err);
            } else if(err.name === 'ValidationError') {
              res.status(400).send(err);
            } else {
              res.status(500).send(err);
            }
        } else {
          res.json({
            message: 'Category created successfully.',
            category: category
          });
        }
      });
    },

    fetch: function(req, res) {
      Category.find({}, function(err, categories) {
        if (err) {
          res.status(500).send(err);
        } else {
          var result = categories.map(function(category) {
            var obj = {};
            var title = category.title;
            var values = category.values;
            obj[title] = values;
            return obj;
          })
          res.json(result);
        }
      });
    },

    update: function(req, res) {
      var set = {};
      set.$set = {};
      if (req.body.title) {
        set.$set.title = req.body.title;
      }
      if (req.body.values) {
        set.$set.values = req.body.values
      }
      Category.findOneAndUpdate({title: req.params.category}, {$set:{name:"Naomi"}}, {new: true}, function(err, doc){
          if(err){
            res.status(500).send(err);
          } else {
            res.json({
              message: 'Category updated successfully.',
              category: category
            });
          }
      });
    },

    delete: function(req, res) {
      Category.remove({
        title: req.params.category
      }, function(err) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.json({
            message: 'Category deleted successfully.'
          });
        }
      });
    }
  };
