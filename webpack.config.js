const resolve = require('path').resolve;
module.exports = {  entry: './src/index.js',  
output: {       publicPath: '/',    path: resolve('dist'),filename: 'bundle.js'  },  devServer: {    contentBase: './dist',  },  module: {    rules: [    {      test: /\.(js|jsx)$/,      exclude: /node_modules/,      
    use: [{loader:'babel-loader' , options: {
    presets: [
      '@babel/preset-env',
      {
        plugins: [
          '@babel/plugin-proposal-class-properties'
        ]
      }
    ]
  }  },    ]  ,},
  
    {
      
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader'
    
  },
{
    test: /\.css$/,  
    
    loaders: ['style-loader', 'css-loader?url=false'],
},
{
  test: /\.(eot|svg|ttf|woff|woff2)$/,
  use: [
    {
      loader: 'file-loader',
      options: {}  
    }
  ]
},
]}};