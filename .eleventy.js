const fs = require("fs");

const photosJSON = fs.readFileSync('./js/imageData.json', {encoding: 'utf-8', flag: 'r'});

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("js");
  eleventyComputed: {
    photosPath = '/img/home-min';
    photoData = JSON.parse(photosJSON);
  }
};
