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
          '@/redux': './src/redux',
          '@/hooks': './src/hooks',
          '@/utils': './src/utils',
          '@/interfaces': './src/types',
          '@/api': './src/api',
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
