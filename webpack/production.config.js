module.exports = {
    entry: './src/index.jsx',
    output: {
        path: './bin',
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: [
                    'es2015',
                    'react',
                ],
            },
        }],
    },
};
