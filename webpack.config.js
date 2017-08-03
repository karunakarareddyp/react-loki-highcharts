var webpack = require("webpack");

module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname  + "/dist/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: __dirname  + '/dist',
        port: 3000
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        'crypto': 'empty'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    module:{
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["latest", "stage-0", "react"]
                }
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader : "json-loader"
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            }
        ]
    }
}

/*
TODO
To work with full navigation set below properties in devServer
    historyApiFallback: true, // Make it true to work router navigations properly. But hot reload not work with this(TODO).
    hot: true

    replace publicPath with "/"

 */