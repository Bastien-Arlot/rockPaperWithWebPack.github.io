const path = require('path');
module.exports = {
    mode: 'development',
    entry: './code/main.js', output: { filename: 'main.js', path: path.resolve(__dirname, 'dist'),},
    devServer: {
        static: path.resolve(__dirname, ''),
        open: true,
        port: 8000
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.png$/i,
                type: "asset/resource"
            },
            {
                test: /\.txt$/i,
                type: 'asset/source'
            },
            {
                test: /\.ttf$/i,
                type: "asset/resource"
            }
        ]
    }
}