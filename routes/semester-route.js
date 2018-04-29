const router = require('express').Router();

const db = require('../app.js').db;

function getVoyageBySemesterAndYear(req, res, next) {
  let {semester, year} = req.params;
  db.one(`Select * FROM voyages WHERE semester = $1 AND year = $2`, [semester, year]).then( data => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'retreived voyage'
    })
  }).catch( err => {
    res.send(err);
    return next(err)
  })
}

router.get('/api/voyages/:semester&:year', (req, res, next) => {
  getVoyageBySemesterAndYear(req, res, next);
})


module.exports = router;
