const webpack = require('webpack');

module.exports = {
    entry: ['script!jquery/dist/jquery.min.js',
            'script!foundation-sites/dist/foundation.min.js',
            './app/app.jsx'],

    externals: {
        jquery: 'jQuery'
    },


    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jquery': 'jquery'
        })

    ],


    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },


    resolve: {
        root: __dirname,
        alias: {
              Main:       'app/components/Main.jsx'
            , applicationStyles: 'app/styles/app.scss'
            , Nav :       'app/components/Nav.jsx'
            , Home:       'app/components/Home.jsx'
            , Countdown:  'app/components/Countdown.jsx'
            , CountdownForm: 'app/components/CountdownForm.jsx'
            , Timer:      'app/components/Timer.jsx'
            , Controls:   'app/components/Controls.jsx'
            , Clock:      'app/components/Clock.jsx'
        },

        extensions: ['', '.js', '.jsx']
    },



    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }



    //,devtool: 'cheap-source-map'


};