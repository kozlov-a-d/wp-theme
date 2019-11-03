const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const sortCSSmq = require('sort-css-media-queries');

module.exports = {
    // parser: 'sugarss',
    syntax: 'postcss-scss',
    ident: 'postcss',
    plugins:[
        // mqpacker({ sort: sortCSSmq.desktopFirst }),
        autoprefixer,
    ]
};
