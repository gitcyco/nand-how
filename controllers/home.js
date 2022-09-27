module.exports = {
  getIndex: (req, res) => {
    if (req.isAuthenticated()) {
      // user is authenticated, so one thing
      // res.render("index.ejs");
      res.render("index.ejs", { user: req.user });
    } else {
      // user is not authenticated, do something else
      res.render("index.ejs", { user: req.user });
    }
  },
};
