const express = require('express');

const app = express();

const promise = require('bluebird');

const port = process.env.PORT || 5000;


const initOptions = {
  // Initialization Options
  promiseLib: promise
};

const pgp = require('pg-promise')(initOptions);

// var connectionString = 'postgres://localhost:5000/voyages';
const db = pgp({
  connectionString: 'postgres://abopubkyhqvlri:5efd420d0574759629ad273727d4443d3b111e25f49a15afb21d5cea7131681a@ec2-54-83-62-190.compute-1.amazonaws.com:5432/ddsjjn648icelb',
  ssl: true
});

module.exports.db = db;

app.use(express.static(`${__dirname}/public`))


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log(res.getHeaders())
  next();
});
app.use(require("./routes/semester-route.js"));
app.use(require('./routes/photo-route.js'));


function getAllVoyages(req, res, next) {
  db.any("SELECT * FROM voyages INNER JOIN ships ON voyages.ship_id = ships.id").then( data => {
    res.status(200).json({
      status: 'success',
      results: data.length,
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
  db.one(`SELECT * FROM voyages WHERE id = $1`, [voyageID]).then( data => {
    res.json({
      status: 'success',
      data: data,
      message: 'retreived voyage'
    })
  }).catch( err => {
    console.log(err);
    return next(err);
  })
}


app.get("/", (req, res, next) => {
  res.sendFile(`${__dirname}/index.html`);
})


app.get('/api/voyages', (req, res, next) => {
  getAllVoyages(req, res, next);
  // res.end();
});


app.get('/api/voyages/:id', (req, res, next) => {
  getVoyage(req, res, next);
  // res.end();
});


app.listen(port, ()=> {
  console.log(`Server listening on port ${port}`)
} )
