var config = require('./config');

module.exports = {
    entry: {
        application: './' + config.gulpAssets + '/javascripts/application'
    },
    output: {
        filename: '[name].bundle.js',
        publicPath: config.javascript.dest
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js?$/, loader: 'babel?presets[]=es2015'},
            { test: /\.jsx?$/, loader: 'jsx-loader?harmony' }
        ]
    }
};