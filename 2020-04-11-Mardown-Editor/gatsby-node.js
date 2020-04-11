/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

module.exports = {
  modifyWebpackConfig: function modifyWebpackConfig(config, env) {
    config.merge({
      resolve: {
        include: [require("path").resolve(__dirname, "./node_modules")]
      }
    });
    return config;
  }
};
