const router = require("express").Router();
const urlRoutes = require("../../urlModules/url.routes")

router.use("/api/v1",urlRoutes)

module.exports = router;
