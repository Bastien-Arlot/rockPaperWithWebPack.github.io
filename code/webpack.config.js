const path = require('path');

module.exports = {
    module: {
        rules: [{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        },
            {test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/ressource'},
            {test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/ressource'}]
    },
    mode: 'development',
    entry: './code/main.js', output: {
        filename: 'main.js', path: path.resolve(__dirname, 'built'),
    }
}
}

