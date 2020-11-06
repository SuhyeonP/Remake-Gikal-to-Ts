const path = require('path');
module.exports = {
    name: 'react-router',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
    },
    entry: {
        app: './client',
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: path.join(__dirname, 'node_modules'),
        }],
    },
    plugins: [],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist',
    }
};