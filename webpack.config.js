const path = require("path");
const webpack = require("webpack");  // webpack should had to be included locally to use plugin
const DashboardPlugin = require("webpack-dashboard/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const commonsPlugin = new webpack.optimize.CommonsChunkPlugin("shared.js") // extract common code in a share file

// common webpack code should be included in html files


const PATHS = {
  app: path.join(__dirname, "app"), // concatenate each argument with the previous one
  build: path.join(__dirname, "build/")
}

module.exports = {
//   context: path.resolve("js"), // relative root directory for an entry key
//   entry: ["./app.js", "./another"],
  entry: "./src/js/main.js",
    // entry: { // having separeted bundles
    //     another: "./another.js", //name of key is file name
    //     app: "./app.js"
    // },
  output: {
        // path: path.resolve("build/js/"),
        // publicPath: "/src/assets/js/", // path will have in webserver match the one in index.html
        // path: path.resolve("build/"), // we changed path because will be separate js and css


    // path: path.resolve("build/"), // include js and images, etc path.resolve resolve a path into an absolute path is like using cd with each argument dont matter passing _dirname
    path: PATHS.build,

    publicPath: "/src/assets/",  // we changed path because will be separate js and css
    // path: "dist/assets",

    filename: "bundle.js",
    // filename: "[name].js",
    sourceMapFilename: "bundle.map"
        // filename: "[name].js" // we need a name based on entrypoint so it will match the key of entry object
  },
    // plugins: [commonsPlugin],
    // plugins: [new ExtractTextPlugin("styles.css")], // received name of the file we want to use
  devServer: {
    inline: true,
    contentBase: "src" // any request from root will check public directory
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: ["babel"],
        query: {
          presets: ["es2015", "stage-0", "react"]
        }
        // loader: "babel-loader"
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: "json-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader!autoprefixer-loader" // will run css-loader first later styleloader
                    // loader: ExtractTextPlugin.extract("style-loader","css-loader") // we need to use plugin

      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader!autoprefixer-loader!sass-loader" // will run css-loader first later styleloader
                    // loader:  ExtractTextPlugin.extract("style-loader","css-loader!sass-loader") // will run css-loader first later styleloader
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg)$/,
        exclude: /node_modules/,
        loader: "url-loader?limit=10000" // look any image processed and check size underneath of this size will be inline base64
                    // usually 10 kb is a good size
                    // more than this will be separated as http request
      },
      {
        test: /\.woff2?$/,
        // Inline small woff files and output them below font/.
        // Set mimetype just in case.
        loader: 'url-loader',
        options: {
           // Output below the fonts directory
          name: './fonts/[hash].[ext]',
          limit: 50000,
          mimetype: 'application/font-woff',
          // Tweak publicPath to fix CSS lookups to take
          // the directory into account.
          publicPath: '../'
        }
      },
      {
        test: /\.(ttf|svg|eot)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[hash].[ext]'
        }
      }
      // {
      //   test: /\.(woff|woff2|eot|otf|ttf)$/,
      //   exclude: / /,
      //   loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
      // }
      // {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      React: "react"
    }),
    new DashboardPlugin(),
    new webpack.optimize.UglifyJsPlugin({

      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: true,
      warnings: false,
      mangle: true // reduce long variable names to a single letter
    }),
    new HtmlWebpackPlugin({
      title: 'Hangar Menu',
      template: "./src/index.html"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ],
  resolve: { // what kind of file types we can process specificating a extension
    // root: [ //so used for js files includes
    //   // path.resolve("./src/js"),
    //   path.resolve("./node_modules/bootstrap-sass/assets/stylesheets")
    // ],
    alias: {
      bootstrap: path.join(__dirname, "node_modules/bootstrap-sass/assets/stylesheets/bootstrap")
    },
    extensions: ["", ".js", ".es6"]
  },
  // externals: {
  //   jquery: 'jQuery'
  // },
  watch: true
}
