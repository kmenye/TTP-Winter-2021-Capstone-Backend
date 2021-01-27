const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:zip', async (req, res, next) => {
    try {
      const stuff = await axios.get(`https://data.cityofnewyork.us/resource/qnjm-wvu5.json?zipcode=${req.params.zip}`);
      console.log(stuff.data);
      res.send(stuff.data);
    } catch (error) {
      next(error);
    }
  });
  
  // Export our router, so that it can be imported to construct our api routes
  module.exports = router;