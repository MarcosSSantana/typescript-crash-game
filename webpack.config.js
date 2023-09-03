const path = require('path');
const distPath = path.resolve(__dirname, 'dist');
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    // mode: 'production',
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'main.js',
        path: distPath,
        library: 'Crash',
        libraryTarget: 'umd'
    },
    // optimization: {
    //     minimize: true,
    //     minimizer: [new TerserPlugin()],
    // },
    // performance: {
    //     hints: false
    // },
    devServer: {
        static: distPath,
        compress: true,
        port: 9000
    }
};