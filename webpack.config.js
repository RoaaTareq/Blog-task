const path = require('path');

module.exports = {
  entry: './src/index.js',  // Your main JS entry file
  output: {
    filename: 'bundle.js',  // Output bundled file
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Transpile all .js files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],  // For React
          },
        },
      },
      {
        test: /\.css$/,  // Process CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'development',
};
