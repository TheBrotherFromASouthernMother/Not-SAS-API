const express = require('express')
const router = express.Router();
const path = require('path')


router.get('/api/voyages/photos/voyage_photo/:photo', (req, res, next) => {
  res.sendFile(path.resolve(`public/images/${req.params.photo}.jpg`))
})


module.exports = router
