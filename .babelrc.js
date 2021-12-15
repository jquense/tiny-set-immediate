module.exports = {
  presets: [
    [
      '@4c',
      {
        target: 'web',
        modules: false,
      },
    ],
    '@babel/preset-typescript',
  ],
  env: {
    test: {
      presets: [['@4c', { target: 'web', modules: 'commonjs' }]],
    },
  },
};
