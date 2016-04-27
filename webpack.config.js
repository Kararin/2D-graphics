module.exports = {
    entry: "./app/main.jsx",
    output: {
        filename: "build.js"
    },
    watch: true,
    devtool: 'source-map',

    resolve: {
        extensions: ['', '.js', '.jsx', 'scss']
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }]
    }
};