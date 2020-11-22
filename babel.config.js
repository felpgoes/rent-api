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
          '@entities': './src/entities',
          '@DTO': './src/DTO',
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
