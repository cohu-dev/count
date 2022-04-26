const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-tailwind-dark-mode', // https://storybook.js.org/addons/storybook-tailwind-dark-mode
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@/components': path.resolve(__dirname, '../src/components'),
          '@/libs': path.resolve(__dirname, '../src/libs'),
          '@/pages': path.resolve(__dirname, '../src/pages'),
          '@/styles': path.resolve(__dirname, '../src/styles'),
          '@/constants': path.resolve(__dirname, '../src/constants'),
        },
      },
    }
  },
}
