const express = require("express");
const bodyParser = require("body-parser");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const bandsRoutes = require("./routes/api/bands.js");
// const apiRoutes = require("./routes");
// const passportSetup = require("./config/passport-setup");
//const passport = require("passport");
//var cors = require("cors");
//const authRoutes = require("./routes/api/index");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
//app.use(cors());

app.get("/api/google", function(req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.get("/api/google");

app.get(
  "/api/google/callback",
  // passport.authenticate("google", { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

//app.use(passport.initialize());
//require("./config/passport-setup");
// Add routes, both API and view
// Add a route that points to our index.html for react-router to handle it

// app.get('*', (req, res) => {
//  res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })
app.use("/api", require("./routes/api"));
//app.use("/api", apiRoutes);
app.use(bandsRoutes);
//app.use("/auth", require("./routes/api"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bandslist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
