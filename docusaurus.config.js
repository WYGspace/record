// @ts-check
// 注意:类型注解允许类型检查和ide自动完成

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '记录',
  tagline: '『不必遗憾。若是美好，叫做精彩。若是糟糕，叫做经历』',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'WYGspace', // 通常是你的GitHub org/用户名。
  projectName: 'record', // 通常是你的回购名。
  deploymentBranch: 'gh-pages',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // 请把这个换成你的回购单。
          editUrl: 'https://github.com/WYGspace/record/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // 请把这个换成你的回购单。
          editUrl: 'https://github.com/WYGspace/record/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '记录',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: '此处开始',
            position: 'left',
            label: '文档',
          },
          //{to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/WYGspace/record',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '教程',
                to: '/docs/此处开始',
              },
            ],
          },
          {
            title: '社区',
            items: [
              //{
              //  label: '堆栈溢出',
              //  href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              //},
              //{
              //  label: '微博',
              //  href: 'https://twitter.com/docusaurus',
              //},
            ],
          },
          {
            title: '更多',
            items: [
              //{
              //  label: '博客',
              //  to: '/blog',
              //},
              {
                label: 'GitHub',
                href: 'https://github.com/WYGspace/record',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  
  // label：语言标签。
  // direction:（ltr默认）或rtl（对于从右到左的语言，如阿拉伯语、希伯来语等）
  // htmlLang<html lang="...">: 使用的BCP 47 语言标签<link ... hreflang="...">  
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    localeConfigs: {
      zh: {
        label: '中文（中国）',
        direction: 'ltr',
        htmlLang: 'zh-CN',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
    },
  },
  
};

module.exports = config;
