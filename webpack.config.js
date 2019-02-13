const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: "/dist",
        filename: 'build.js',
        //chunkFilename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    //MiniCssExtractPlugin.loader,
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': __dirname + '/src/',
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    externals: {
        Vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        },
        Vuetify: {
            root: 'Vuetify',
            commonjs: 'Vuetify',
            commonjs2: 'Vuetify',
            amd: 'Vuetify'
        },
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
        //配置代理
        proxy: {
            '/controlApi/': {
                //target: 'http://47.95.197.120:1023/',
                //target: 'http://192.168.5.17:8080/',
                target: 'http://192.168.2.23:8084/',
                //target: 'http://52.201.230.133:8080/',
                //target: 'https://platformuat.way.io',
                secure: false,
                changeOrigin: true
            },
        },
        //public: 'http://192.168.6.195'
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};