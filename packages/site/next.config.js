const path = require("path");

module.exports = {
  webpack: (config) => {
    console.log(`NextConfig env = ${process.env.COUNTRY}`);

    const componentsPath = process.env.COUNTRY
      ? `components-${process.env.COUNTRY}`
      : `components`;

    config.resolve.alias["@components"] = path.resolve(
      __dirname,
      `node_modules/${componentsPath}`
    );

    return config;
  },
};
