const withImages = require("next-images");
module.exports = withImages({
  images: {
    domains: ["res.cloudinary.com"],
  },
});
