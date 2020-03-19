/* eslint-disable no-path-concat */
module.exports = {
  entry: `${__dirname}/client/src/App.jsx`,
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: [['@babel/plugin-proposal-class-properties']]
          }
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/client/public/dist`
  }
};
