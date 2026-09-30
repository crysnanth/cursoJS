const path = require('path'); //CommomJS padrão do node.js

module.exports = {
    mode: "development",
    entry: "./frontend/main.js",
    output: {
        path: path.resolve(__dirname, "public", "assets", "js"),
        filename: "bundle.js",
    },
    // ⚠️ MUITO IMPORTANTE: Força o Webpack 5 a gerar o código do "bundle" em ES5
    target: ["web", "es5"],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                type: "javascript/auto",
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        sourceType: "unambiguous", // <--- Força a detecção correta de ES Modules
                    },
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    devtool: "source-map",
};