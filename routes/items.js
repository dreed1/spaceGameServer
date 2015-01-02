var express = require('express');
var router = express.Router();
var Item = require('./models/item');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send({"items": ['first item', 'second item']});
});

router.post('/', function(res, res) {
  var item = Item.build({
    itemName: "someItem",
    itemDescription: "An item nobody will ever see",
    itemLevel: 1
  });
  res.send({"item": item});
});

module.exports = router;
