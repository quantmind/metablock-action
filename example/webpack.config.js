const path = require("path");
const RequireFrom = require("webpack-require-from");
const { devServer, statusCode } = require("@metablock/server");

const PWD = process.cwd();
const STATIC_PATH = "/dist/";
const DIRECTORY = path.resolve(PWD, `.${STATIC_PATH}`);
const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";
const resolvePath = (relativePath) => path.resolve(PWD, relativePath);

const config = {
  mode,
  plugins: [
    new RequireFrom({
      variableName: "__bundle_url__",
    }),
  ],
  entry: {
    block: "./app/main.tsx",
  },
  output: {
    publicPath: STATIC_PATH,
    path: DIRECTORY,
    filename: "block.js",
    chunkFilename: "[name].bundle.js",
    libraryTarget: "umd",
  },
  devtool: "source-map",
  optimization: {
    minimize: mode === "production",
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: [/node_modules/, /third_party/, /server/],
        use: {
          loader: "ts-loader",
        },
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(s?)css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};

if (mode === "development") {
  config.devServer = devServer("https://example.mblock.me", {
    ssr: false,
    ssrPlugins: [statusCode],
    static: {
      publicPath: STATIC_PATH,
      directory: DIRECTORY,
    },
    hot: true,
    port: 9081,
  });
}

module.exports = config;
