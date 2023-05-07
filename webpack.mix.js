let path = require('path')
let mix = require('laravel-mix')

require('./nova.mix')

mix
  .setPublicPath('dist')
  .js('resources/js/card.js', 'js')
  .vue({ version: 3 })
  .css('resources/css/card.css', 'css')
  .nova('lafbet/mega-filter')
  .alias({
    'laravel-nova': path.resolve(__dirname, './node_modules/laravel-nova/dist/index.js'),
    '~~nova~~': path.resolve(__dirname, '../../vendor/laravel/nova/resources/js/')
  })
