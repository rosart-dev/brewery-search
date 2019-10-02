const express = require("express");
const router = express.Router();
const axios = require("axios");
const config = require("../config");

let googleKey;
if (process.env.NODE_ENV !== "production") {
  googleKey = config.GOOGLE_KEY;
} else {
  googleKey = config.GOOGLE_KEY;
}

router.get("/geocoding/:lat/:long", async (req, res) => {
  try {
    let lat = req.params.lat;
    let long = req.params.long;
    const resp = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${googleKey}`
    );

    let city = resp.data.results[0].address_components[3].long_name
      .toLowerCase()
      .replace("the ", "");
    let state = resp.data.results[0].address_components[5].long_name
      .toLowerCase()
      .replace(" ", "_");

    let obj = {
      city,
      state
    };

    res.json(obj);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
