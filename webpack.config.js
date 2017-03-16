var path = require('path');
var webpack  = require('webpack');

var phaserModule = path.join(__dirname,'./node_modules/phaser');
var phaser = path.join(phaserModule,'build/custom/phaser-split.js');
var pixi = path.join(phaserModule,'build/custom/pixi.js');
var p2 = path.join(phaserModule,'build/custom/p2.js');

module.exports={
  entry:{
    'app':'./app.js',
    'vendor':['pixi','p2','phaser']
  },
  output:{
    filename : 'bundle.js',
    path: path.resolve(__dirname,'build'),
    publicPath: '/build/'
  },
  module:{
    loaders:[
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader']
      }
      ,{
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader'
      },
      { test: /pixi.js/, loader: "script-loader" },
      { test: /p2.js/, loader: "script-loader" },
      { test: /phaser.js/, loader: "script-loader" }
    ]
  },
  resolve: {
   alias: {
     'phaser': phaser,
     'pixi': pixi,
     'p2': p2
   }
 },
 plugins:[
   new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js'})
 ]
};
