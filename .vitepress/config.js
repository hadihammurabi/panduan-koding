const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: 'Panduan Koding',
  description: 'Koding jadi cepat, hemat, dan mudah dirawat',
  base: '/',
  lang: 'id-ID',
  themeConfig: {
    nav: require('./nav'),
    sidebar: require('./sidebar'),
    footer: {
      display: true,
      copyright: 'hadihammurabi',
      content: 'Build with ❤',
    },
  },
});