const router = require("express").Router();
const UrlController = require("./url.controller");


router.post("/url/encode", UrlController.getUrl)
router.get("/url/decode/:urlId", UrlController.longUrl)
router.get("/statistic/:urlPath",UrlController.getStatisticUrl)

module.exports = router;