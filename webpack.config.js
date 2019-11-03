var Encore = require('@symfony/webpack-encore');
var path = require('path');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('build/')
    // public path used by the web server to access the output path
    .setPublicPath('/')

    // ENTRY CONFIG
    .addEntry('index', './frontend/assets/scripts/index.js')
    .addEntry('main', './frontend/assets/scripts/main.js')
    // .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    .addAliases({
        '~blocks': path.resolve(__dirname, `frontend/assets/blocks/`),
        '~styles': path.resolve(__dirname, `frontend/assets/styles/`), 
        '~scripts': path.resolve(__dirname, `frontend/assets/scripts/`),
        '~vendor': path.resolve(__dirname, `frontend/assets/vendor/`),
    })

    .cleanupOutputBeforeBuild()
    
    .enableSourceMaps(!Encore.isProduction())

    .configureCssLoader(function(config) {
        // change the config
        config.url = false;
    })

    // uncomment if you use Sass/SCSS files
    .enableSassLoader()

    // uncomment if you're having problems with a jQuery plugin
    .autoProvidejQuery()

    .copyFiles({
        from: './frontend/assets/images',
        // optional target path, relative to the output dir
        to: '../images/[path][name].[ext]',
    })
;


// fetch the config, then modify it!
var config = Encore.getWebpackConfig();

config.optimization = {
    ...config.optimization,
    splitChunks: {
      name: 'common',
      chunks: 'initial',
    },
}

module.exports = config;