const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point for your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file name
    clean: true, // Clean the output directory before building
  },
  mode: 'development', // Set mode to 'development' or 'production'
  devServer: {
    static: path.resolve(__dirname, 'dist'), // Serve files from the 'dist' directory
    port: 3000, // Development server port
    open: true, // Automatically open the browser
    hot: true, // Enable hot module replacement
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Process image files
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use your HTML template
      filename: 'index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these file extensions
  },
};