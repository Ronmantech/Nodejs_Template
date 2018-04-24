let express = require('express');
let router = express.Router();

// GET /photo
router.get('/PUG_FILENAME_HERE', function(req, res, next)
{
  return res.render('PUG file name ', { title: ' TITLE NAME HERE' });
});


module.exports = router;
