module.exports = {
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    // req.flash("error_msg", "Not Authorized");
    res.redirect("/");
    // console.log("not authorized");
  },
  ensureGuest: function(req, res, next) {
    if (req.isAuthenticated()) {
      res.redirect("/dashboard");
    } else {
      return next();
    }
  }
};
