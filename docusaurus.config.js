// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Portal Speedrun Guide',
  tagline: '',
  // favicon: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/400/c7cb09b9f0fbb9589b4bd5a8217c8333c4d8204e.ico',
  favicon: 'img/favicon_white_no_text.png',

  // Set the production url of your site here
  url: 'https://portal.speedrun.guide',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'speedrun-guide', // Usually your GitHub org/user name.
  projectName: 'portal', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // TODO: Allow editing of pages!
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false
        // theme: {
        //   customCss: require.resolve('./src/css/custom.css'),
        // },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      //<meta property="og:type" content="website">
      // <meta property="og:url" content="https://linkfork.co/">
      // <meta property="og:title" content="LinkFork | Link Preview Customization">
      // <meta property="og:description" content="LinkFork lets you shorten, and customize how your link will appear when shared on social media, for free.">
      // <meta property="og:image" content="https://linkfork.co/images/poster.png">
      metadata: [
        {property: 'og:type', name: 'og:type', content: 'website'},
        {property: 'og:url', name: 'og:url', content: 'https://portal.speedrun.guide'},
        {property: 'og:title', name: 'og:title', content: 'Portal Speedrun Guide'},
        {property: 'og:description', name: 'og:description', content: 'A speedrun guide for Portal (2008)'},
        {property: 'og:image', name: 'og:image', content: 'https://speedrun.guide/img/favicon_white.png'},

        {property: 'description', name: 'description', content: 'A speedrun guide for Portal (2008)'},
        {property: "twitter:card", name: "twitter:card", content: "summary"},
      ],

      announcementBar: {
        id: 'wip',
        content:
            'This guide is a work in progress and not yet complete. Contribution will be open soon.',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },

      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      // Replace with your project's social card
      image: 'img/favicon_white.png',
      navbar: {
        title: 'Portal Speedrun Guide',
        logo: {
          alt: 'Portal Logo',
          src: 'img/favicon_white_no_text.png',
          // src: 'img/logo.svg',
          // src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/400/c7cb09b9f0fbb9589b4bd5a8217c8333c4d8204e.ico',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'introSidebar',
            position: 'left',
            label: 'Introduction',
          },
          // {to: '/chambers', label: 'Chambers', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'chambersSidebar',
            position: 'left',
            label: 'Chambers',
          },
          // {to: '/unofficial_maps', label: 'Unofficial Maps', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Guide',
            items: [
              {
                label: 'Introduction',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/speedrun-guide/portal',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/gQ285vS',
              },
              {
                label: 'SRDC',
                href: 'https://www.speedrun.com/user/Portal',
              },
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
