// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hermes Protocol Documentation",
  tagline: "Dinosaurs are cool",
  url: "https://docs.hemesprotocol.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/hermes-camel.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "Hermes Protocol Documentation", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        // hideOnScroll: true,
        // title: "Hermes Protocol",
        logo: {
          alt: "Hermes Protocol Secondary Logo",
          src: "img/secondary-logo/hermes-secondary-camel.svg",
        },
        items: [
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        copyright: `© ${new Date().getFullYear()} <a href="https://momentum-one.io/">Momentum One</a>. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      imageZoom: {
        options: {
          background: "rgba(0,0,0,0.8)",
        },
      },
    },
  plugins: [
    "plugin-image-zoom",
    [require.resolve("@easyops-cn/docusaurus-search-local"), {}],
  ],
};

module.exports = config;
