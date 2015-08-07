module.exports = {
  entry: ['./src/qpx.js', './src/live-test.js'],

  output: {
    path: __dirname + '/lib',
    filename: 'qpx.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
};