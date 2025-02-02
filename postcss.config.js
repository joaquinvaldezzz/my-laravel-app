import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss'

export default {
  plugins: [
    process.env.NODE_ENV === 'production' &&
      purgeCSSPlugin({
        content: [
          './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
          './storage/framework/views/*.php',
          './resources/**/*.blade.php',
          './resources/**/*.js',
          './resources/**/*.vue',
        ],
        keyframes: true,
        variables: true,
      }),
  ],
}
