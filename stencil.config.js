const { sass } = require("@stencil/sass");

exports.config = {
  namespace: "pwc-choices",
  bundles: [
    {
      components: ["pwc-choices"]
    }
  ],
  outputTargets: [
    {
      type: "dist"
    },
    {
      type: "www",
      indexHtml: "./index.html"
    }
  ],
  plugins: [sass()],
  devServer: {
    openBrowser: false
  }
};
