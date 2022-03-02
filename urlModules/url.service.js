const shortid = require("shortid");
const express = require("express");
const urlModel = require("../models/url.model");
const { nanoid } = require("nanoid");

const UrlService = {};

UrlService.shortenUrl = async (originalUrl, hostname) => {
  const urlPath = nanoid(8);
  const shortUrl = hostname + "/" + urlPath;
  const checkUrl = await urlModel.findOne({originalUrl})
  if (checkUrl) return checkUrl.shortUrl 
  const url = new urlModel({
    urlPath,
    originalUrl,
    shortUrl,
    Date: new Date(),
  });
  await url.save();
  return shortUrl;
};

UrlService.longUrl = async (id,ip) => {
  const url = await urlModel.findOne({ urlPath: id });
  if (url) {
    url.Hits = url.Hits + 1;
    url.lastAccessedOn = new Date()
    url.usersVisited = Array.from(new Set([...url.usersVisited,ip]))
      await url.save()
    return url
  }
  throw new Error("url not found!")
};

UrlService.statUrl = async (id) => {
    const url = await urlModel.findOne({ urlPath: id });
    if (url) {
      return url
    }
    throw new Error("url not found!")
  };


module.exports = UrlService;
