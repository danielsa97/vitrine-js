module.exports = {
    chainWebpack: config => {
        config.plugins.delete('prefetch');
        config.plugins.delete('preload');
        config.plugin('html').tap(args => {
            args[0].inject = false;
            args[0].cache = false;
            args[0].minify = true;
            return args;
        });
    },
    css: {
        extract: {
            filename: 'vitrine.min.css',
            chunkFilename: 'vitrine.min.css',
        },
    },
    configureWebpack: {
        output: {
            filename: 'vitrine.min.js'
        },
        optimization: {
            splitChunks: false
        },
    },
    filenameHashing: false
}