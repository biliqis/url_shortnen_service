const UrlService = require("./url.service");
const urlModel = require("../models/url.model");

const UrlController = {};

UrlController.getUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    const hostname = req.headers.host;
    
    const newUrl = await UrlService.shortenUrl(originalUrl, hostname);
    if (!hostname) return res.status(401).json("Invalid Url");
    return res.status(200).json({ data: newUrl });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: err.message });
  }
};

UrlController.longUrl = async (req, res) => {
  try {
    const url = await UrlService.longUrl(req.params.urlId,req.ip);
    
    if (url) {
      return res.redirect(307,url.originalUrl);
    }
    return res.status(404).json("No Url found");
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: err.message });
  }
};

UrlController.getStatisticUrl = async (req, res) => {
  try {
    const url = await UrlService.statUrl(req.params.urlPath);
    if (url) {
      return res.status(200).json({ data: url });
    }
    return res.status(404).json("No Url found");
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: err.message });
  }
};


module.exports = UrlController;
