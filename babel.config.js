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
          '@lib': './src/lib',
          '@providers': './src/providers'
        }
      }
    ]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
