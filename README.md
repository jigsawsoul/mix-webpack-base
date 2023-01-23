## Install

```npm install glob laravel-mix eslint-webpack-plugin copy-webpack-plugin stylelint-webpack-plugin stylelint stylelint-config-recommended-scss image-minimizer-webpack-plugin imagemin svgo eslint eslint-config-airbnb-base```


## Overview

This script was built to based of the current setup on ExpertMarkets.

This script is using several webpack plugins to handle different types of assets in a Laravel Mix workflow. Here's a breakdown of what each part of the code does:

The first few lines import the necessary modules for the script:

* `glob` is used to find files that match a certain pattern.
* `laravel-mix` is a wrapper around webpack that simplifies asset compilation and management in Laravel projects.
* `eslint-webpack-plugin` is a webpack plugin that lints JavaScript files using ESLint.
* `copy-webpack-plugin` is a webpack plugin that copies files from the source to the destination folder.
* `stylelint-webpack-plugin` is a webpack plugin that lints CSS files using Stylelint.
* `image-minimizer-webpack-plugin` is a webpack plugin that minifies images.

The script then uses `glob.sync` to find all `.scss` files in the `"./src/sass"` directory, ignoring files that begin with an underscore. These files are then passed through the `mix.sass()` method, which compiles them to CSS. Additionally, source maps are enabled and the public path is set to `"./dist"`.

Next, the script uses `glob.sync` again to find all `.js` files in the `"./src/js"` directory. These files are then passed through the `mix.js()` method, which compiles them to JavaScript. Like before, source maps are enabled and the public path is set to `"./dist"`.

The script then uses the `mix.copy()` method to copy all files in the `"./src/font"` directory to the `"./dist/font"` directory.

The script then uses the `mix.webpackConfig()` method to add some webpack plugins to the configuration.

`CopyWebpackPlugin` is used to copy all files in the `"./src/img"` directory to the `"./dist/img" directory.

`ImageMinimizerPlugin` is used to minify all SVG images.

Finally, the script uses the `mix.webpackConfig()` method again to add some linting webpack plugins to the configuration.

`StylelintPlugin` is used to lint all the CSS files in `"./src/sass"` directory.

`ESLintPlugi`n is used to lint all the JavaScript files in `"./src/js"` directory.

This script sets up a Laravel Mix workflow for handling different types of assets, including CSS, JavaScript, fonts, and images. It uses webpack plugins to perform tasks such as linting, minifying, and copying files, making it easier to manage assets in a project.