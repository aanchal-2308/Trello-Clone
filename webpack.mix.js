const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

 mix.js("resources/js/app.js", "public/js")
 .vue()
 .postCss("resources/css/app.css", "public/css", [
     require("tailwindcss")
 ])
 .webpackConfig(require("./webpack.config"));

 class GraphQl {
    dependencies(){
        return ['graphql','graphql-tag']
    }

    webpackRules(){
        return {
            test: /\.(graphql|gql)$/,
            exclude: /node_modules/,
            loader: 'graphql-tag/loader',
        }
    }
}

mix.extend('graphql', new GraphQl());
mix.graphql();

if (mix.inProduction()) {
 mix.version();
}
