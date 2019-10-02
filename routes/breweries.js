const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/getBreweries", async (req, res) => {
  try {
    let url = req.query.url;
    const resp = await axios.get(url);
    res.json(resp.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
