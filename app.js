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


console.log(db)


app.get("/", (req, res) => {
  res.send("Welcome to the Semester at Sea API");
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

app.get('/api/voyages', (req, res, next) => {
  getAllVoyages(req, res, next);
  // res.end();
});

app.listen(5000, ()=> {
  console.log("Server listening on port 5000")
} )
