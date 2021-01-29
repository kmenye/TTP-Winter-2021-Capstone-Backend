const express = require('express');
const router = express.Router();
const axios = require('axios');

// route for batch data call, may be useful for future functionality

// router.get('/', async (req, res, next) => {
//   try {
//     const stuff = await axios.get(`https://data.cityofnewyork.us/resource/if26-z6xq.json`);
//     console.log(stuff.data);
//     res.send(stuff.data);
//   } catch (error) {
//     next(error);
//   }
// });

// route for zip search
// e.g. localhost/compost/zipsearch/10040
router.get('/zipsearch/:zip', async (req, res, next) => {
    try {
      const stuff = await axios.get(`https://data.cityofnewyork.us/resource/if26-z6xq.json?zip_code=${req.params.zip}`);
      console.log(stuff.data);
      res.send(stuff.data);
    } catch (error) {
      next(error);
    }
  });

// route for borough search
// e.g. localhost/compost/boroughsearch/Bronx
  router.get('/boroughSearch/:borough', async (req, res, next) => {
    try {
      const stuff = await axios.get(`https://data.cityofnewyork.us/resource/if26-z6xq.json?borough=${req.params.borough}`);
      console.log(stuff.data);
      res.send(stuff.data);
    } catch (error) {
      next(error);
    }
  });

  
  // Export our router, so that it can be imported to construct our api routes
  module.exports = router;