const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user"); //new addition
const InitiateMongoServer = require("./config/db");
// Initiate Mongo Server
InitiateMongoServer();
const app = express();
// PORT
const PORT = process.env.PORT || 5000;
// Middleware
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});
/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);
app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
// @method-post
// @description-Get LoggedIn User
// @param- user/me

router.get("/me", auth, async (req, res) => {
  try {
    // request.user is getting fetched from Middleware after token
    const user = await User.findById(re.user.is);
    res.json(user);
  } catch (e) {
    res.send({ message: "Error in fetch" });
  }
});
