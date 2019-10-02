const express = require("express");
const router = express.Router();
const axios = require("axios");

// router.get("/", async (req, res) => {
//   try {
//     const data = await fetch(
//       "https://sandbox-api.brewerydb.com/v2/?key=15a1a85762973af44d983cf2dffe0632/breweries"
//     );
//     res.json(data);
//     console.log(data);
//   } catch (err) {
//     res.status(500).send("Server Error");
//   }
// });

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
