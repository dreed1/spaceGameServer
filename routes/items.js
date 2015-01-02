var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send({"items": ['first item', 'second item']});
});

router.post('/', function(res, res) {
  res.send("you posted a new item i think.");
});

module.exports = router;
