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
          '@DTO': './src/DTO',
          '@entities': './src/entities',
          '@providers': './src/providers'
        }
      }
    ]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
