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
        test: /\.(js|jsx)$/,  // Process JS and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],  // For React
          },
        },
      },
      {
        test: /\.scss$/,  // Process SCSS files
        use: [
          'style-loader',  // Inject styles into the DOM
          'css-loader',    // Resolves CSS imports
          'sass-loader',   // Compiles Sass to CSS
        ],
      },
      {
        test: /\.css$/,  // Process CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,  // Handle image files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',  // Output file name format
              outputPath: 'images/',  // Place images in an 'images' folder
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Resolve JS and JSX extensions
  },
  mode: 'development',
};
