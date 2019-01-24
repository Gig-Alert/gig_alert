const express = require("express");
const bodyParser = require("body-parser");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const bandsRoutes = require("./routes/api/bands.js");
// const apiRoutes = require("./routes");
const passportSetup = require("./config/passport-setup");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Add routes, both API and view
// Add a route that points to our index.html for react-router to handle it

// app.get('*', (req, res) => {
//  res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })
app.use("/api", require("./routes/api"));
//app.use("/api", apiRoutes);
app.use(bandsRoutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bandslist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
