const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;

// NOTE: Any new API routes must be added in this file.
// I.e. Add const to require, then add that routes with router.use.

// Review recoring 9/7/10 at 10:50-11AM CT