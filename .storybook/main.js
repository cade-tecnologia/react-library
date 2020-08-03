const path = require('path');

module.exports = {
  stories: ['../src/stories/**/*.story.tsx'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.story\.tsx?$/],
          include: [path.resolve(__dirname, '..', 'src', 'stories')], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  }
}
