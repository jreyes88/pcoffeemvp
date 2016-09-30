module.exports = {
  
  // This code will be compiled 
  entry: "./src/js/app.js",

  // Then output into this file
  output: {
    path: __dirname + "/public",
    publicPath: '/',
    filename: "bundle.js"
  },


  // This will be what we do
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          // These are the specific transformations we'll be using. 
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }

}