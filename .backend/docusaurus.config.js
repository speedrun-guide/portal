// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const YAML = require('yaml')
const fs = require('fs')

const srgConfig = YAML.parse(fs.readFileSync('../config.yml', 'utf8'))
const srgURL = 'https://' + srgConfig.id + '.speedrun.guide'
const srgName = srgConfig.name + ' Speedrun Guide'
const srgDescription = "A speedrun guide for " + srgConfig.name + " ( " + srgConfig.year + ")"

function buildNavbarItems() {
  let items = []
  let sections = srgConfig.sections

  for (const [key, value] of Object.entries(sections)) {
    items.push({
      type: 'docSidebar',
      sidebarId: key+"Sidebar",
      position: 'left',
      label: value.name,
    })
  }

  return items
}

function buildFooter() {
  let footer = {}
  let srgFooter = srgConfig.footer
  if(srgFooter == null) return footer

  footer.style = srgFooter.style == null ? 'dark' : srgFooter.style
  footer.links = []

  for (const [key, value] of Object.entries(srgFooter.links)) {
    footer.links.push({
      title: value.title,
      items: value.items
    })
  }

  return footer
}

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: srgName,
  tagline: '',
  favicon: srgConfig.favicon,
  url: srgURL,
  baseUrl: '/',
  organizationName: 'speedrun-guide',
  projectName: srgConfig.id,
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
          routeBasePath: '/',
          path: '../docs'
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
      metadata: [
        {property: 'og:type', name: 'og:type', content: 'website'},
        {property: 'og:url', name: 'og:url', content: srgURL},
        {property: 'og:title', name: 'og:title', content: srgName},
        {property: 'og:description', name: 'og:description', content: srgDescription},
        {property: 'og:image', name: 'og:image', content: srgConfig.logo},

        {property: 'description', name: 'description', content: srgDescription},
        {property: "twitter:card", name: "twitter:card", content: "summary"},
      ],
      announcementBar: srgConfig.announcement,
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      image: srgConfig.logo,
      navbar: {
        title: srgName,
        logo: {
          alt: 'Logo',
          src: srgConfig.favicon
        },
        items: buildNavbarItems()
      },
      footer: buildFooter(),
      // footer: {
      //   // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
