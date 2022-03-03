const router = require("express").Router();
const UrlController = require("./url.controller");

router.get('/', async (req,res) => {
    return res.send('welcome to our url-shortener!, please go to https://documenter.getpostman.com/view/16600205/UVktoYPZ to view our amazing documentation')
})
router.post("/url/encode", UrlController.getUrl)
router.get("/url/decode/:urlId", UrlController.longUrl)
router.get("/statistic/:urlPath",UrlController.getStatisticUrl)

module.exports = router;