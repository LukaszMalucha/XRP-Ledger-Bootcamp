const path = require("path");
const BundleTracker = require("webpack-bundle-tracker");
const webpack = require("webpack");

module.exports = {
    publicPath: "http://127.0.0.1:8080/",
    outputDir: path.resolve(__dirname, "../static/dist"), // ✅ Ensure correct output directory

    chainWebpack: (config) => {
        config
            .plugin("BundleTracker")
            .use(BundleTracker, [{
                path: path.resolve(__dirname, "."), // ✅ Save in `frontend` (same dir as vue.config.js)
                filename: "webpack-stats.json" // ✅ Use only filename, no extra path
            }]);

        config.output.filename("bundle.js");
        config.optimization.splitChunks(false);
        config.resolve.alias.set("__STATIC__", "static");
    },

    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false)
            })
        ],
        devServer: {
            host: "127.0.0.1",
            port: 8080,
            hot: true,
            watchFiles: { paths: ["src/**/*"] },
            https: false,
            headers: { "Access-Control-Allow-Origin": ["*"] },
            allowedHosts: "all",
        },
    },
};
