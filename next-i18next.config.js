const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'ja',
    locales: ['en', 'ja'],
  },
  localePath: path.resolve('./locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
