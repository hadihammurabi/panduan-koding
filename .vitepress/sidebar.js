const { sidebarConfig } = require("vuepress-theme-hope");

const application = sidebarConfig([
  {
    text: 'Teknologi',
  },
  {
    text: 'Standard Penamaan',
  },
  {
    text: 'Arsitektur',
    children: [
      {
        text: 'Frontend',
        children: [
          {
            text: 'Web',
            link: '/',
            children: [
              // {
              //   text: 'Teknologi',
              //   link: '/',
              // },
            ],
          },
          {
            text: 'Mobile',
            link: '/',
            children: [
              // {
              //   text: 'Teknologi',
              //   link: '/',
              // },
            ],
          },
        ],
      },
      {
        text: 'Backend',
        children: [
          // {
          //   text: 'Teknologi',
          //   link: '/',
          // },
        ],
      },
    ],
  },
]);

const dataStore = sidebarConfig([
  {
    text: 'Teknologi',
  },
  {
    text: 'Standard Penamaan',
  },
]);

const operation = sidebarConfig([
  {
    text: 'Teknologi',
  },
]);


module.exports = sidebarConfig({
  '/application/': application,
  '/data-store/': dataStore,
  '/operation/': operation,
});