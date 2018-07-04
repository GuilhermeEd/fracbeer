require('babel-polyfill');

module.exports = {
    entry: ['babel-polyfill', './src'],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    devServer: {
        hot: true,
        inline: true,
        port: 3333,
        contentBase: './public',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            }
        },
        {
            test: /\.(s*)css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }
        ]
    },
};