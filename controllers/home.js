module.exports = {
  getIndex: (req, res) => {
    if (req.isAuthenticated()) {
      // user is authenticated, so one thing
      res.render("index.ejs");
    } else {
      // user is not authenticated, do something else
      res.render("index.ejs");
    }
  },
};
