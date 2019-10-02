const express = require("express");

const serverless = require("serverless-http");

const app = express();

//Init Middleware
app.use(express.json({ extended: true }));

//Define Routes
app.use("/api/breweries", require("./routes/breweries"));
app.use("/api/google", require("./routes/google"));
app.use("./netlify/functions/api", router);

//Init Port number
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on Port: ${PORT}`);
});

module.exports.handler = serverless(app);
