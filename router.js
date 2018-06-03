const passport = require("passport");
const Authentication = require("./controllers/authentication.controller");
const passportService = require("./services/passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireLogin = passport.authenticate("local", { session: false });

module.exports = app => {
  app.get("/", requireAuth, (req, res) => {
    res.send({ hi: "there" });
  });
  app.post("/login", requireLogin, Authentication.login);
  app.post("/register", Authentication.register);
};
