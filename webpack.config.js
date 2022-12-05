/******************************************************************************
 *         Name: webpack.config.js
 *       Author: Chad Chapman
 * Date Created: December 4, 2022
 *  Description: Webpack configuration file
******************************************************************************/
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};