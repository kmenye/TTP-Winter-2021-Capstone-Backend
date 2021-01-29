const express = require('express');
const router = express.Router();
const axios = require('axios');

// route for batch data call, for potential future use

// router.get('/', async (req, res, next) => {
//   try {
//     const stuff = await axios.get(`https://data.cityofnewyork.us/resource/edk2-vkjh.json`);
//     console.log(stuff.data);
//     res.send(stuff.data);
//   } catch (error) {
//     next(error);
//   }
// });

// route for zip search
// e.g. localhost/pharmaceuticals/zipsearch/10040
router.get('/zipsearch/:zip', async (req, res, next) => {
    try {
      const stuff = await axios.get(`https://data.cityofnewyork.us/resource/edk2-vkjh.json?zipcode=${req.params.zip}`);
      console.log(stuff.data);
      res.send(stuff.data);
    } catch (error) {
      next(error);
    }
  });

  // route for borough search
  // e.g. localhost/pharmaceuticals/boroughsearch/Bronx
  router.get('/boroughsearch/:borough', async (req, res, next) => {
    try {
      const stuff = await axios.get(`https://data.cityofnewyork.us/resource/edk2-vkjh.json?zipcode=${req.params.zip}`);
      console.log(stuff.data);
      res.send(stuff.data);
    } catch (error) {
      next(error);
    }
  });
  
  // Export our router, so that it can be imported to construct our api routes
  module.exports = router;