const express = require('express');
const router = express.Router();

// GET 
router.get('*', function(req, res, next)
{
  return res.write("Hello, World!");
  // return res.render('PUG file name ', { title: ' TITLE NAME HERE' });
});


module.exports = router;
