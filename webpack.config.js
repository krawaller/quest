module.exports = {  
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
            	test: /\.json$/,
            	exclude: /node_modules/,
            	loader: 'json-loader'
            }
        ]
    }
};