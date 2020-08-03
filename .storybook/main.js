module.exports = {
  stories: ['../src/stories/**/*.story.tsx'],
  addons: ['@storybook/addon-knobs/register'],
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
