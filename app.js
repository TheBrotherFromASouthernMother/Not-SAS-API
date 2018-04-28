const express = require('express');

const app = express();

const promise = require('bluebird');

const initOptions = {
  // Initialization Options
  promiseLib: promise
};

const pgp = require('pg-promise')(initOptions);

// var connectionString = 'postgres://localhost:5000/voyages';
var db = pgp({
  database: 'semester_at_sea'
});

app.use(express.static('public'))

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
})


function getAllVoyages(req, res, next) {
  db.any("SELECT * FROM voyages").then( data => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'retreived all voyages'
    });
  }).catch( err => {
    console.log(err);
    return next(err)
  })
}

function getVoyage(req, res, next) {
  let voyageID = parseInt(req.params.id);
  db.one(`SELECT * FROM voyages WHERE id = ${voyageID}`).then( data => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'retreived voyage'
    })
  }).catch( err => {
    console.log(err);
    return next(err);
  })
}

app.get('/api/voyages', (req, res, next) => {
  getAllVoyages(req, res, next);
  // res.end();
});

app.get('/api/voyages/:id', (req, res, next) => {
  getVoyage(req, res, next);
  // res.end();
});

app.listen(5000, ()=> {
  console.log("Server listening on port 5000")
} )
