module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@/translations': './src/translations',
          '@/screens': './src/screens',
          '@/navigators': './src/navigation',
          '@/assets': './src/assets',
          '@/components': './src/components',
          '@/redux-content': './src/redux-content',
          '@/hooks': './src/hooks',
          '@/utils': './src/utils',
          '@/interfaces': './src/interfaces',
          '@/api': './src/api',
          '@/global-styles': './src/global-styles',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
};
