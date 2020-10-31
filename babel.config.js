module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@models': './src/models',
          '@controllers': './src/controllers'
        }
      }
    ]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
