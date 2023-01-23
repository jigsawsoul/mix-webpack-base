const glob = require('glob')
const mix = require('laravel-mix')
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

// CSS

const styles = glob.sync('./src/sass/**/*.scss', {
  ignore: ['./src/sass/**/_*.scss']
})

styles.forEach((file) => {

  mix
    .sass(file, 'css')
    .sourceMaps()
    .options({
      processCssUrls: false
    })
    .setPublicPath('./dist')

})
 
// JavaScript

const javascript = glob.sync('./src/js/**/*.js', {
  ignore: []
});

javascript.forEach((file) => {

  mix
    .js(file, 'js')
    .sourceMaps()
    .setPublicPath('./dist')

})

// Fonts

mix.copy('./src/font/*', './dist/font')

// Images

mix.webpackConfig({
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/img/',
          to: './dist/img/'
        },
      ]
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.svgoMinify,
        options: {
          encodeOptions: {
            multipass: true,
            plugins: [
              "preset-default",
            ],
          },
        },
      }
    })
  ],
})

// Lint (CSS & Javascipt)

mix.webpackConfig({
  plugins: [
    new StylelintPlugin({
      files: './src/sass/**/*.scss',
      failOnError: true
    })
  ]
})

mix.webpackConfig({
  plugins: [
    new ESLintPlugin({
      files: './src/js/**/*.js',
      failOnError: true
    })
  ],
})
