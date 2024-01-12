import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "EzeXchange",
  tagline: "EzeXchange-API is an universal API for cryptocurrency exchanges",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://ezexchange-api.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "EzeXchange-API", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.

  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/EzeXchange-API/documentation/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    navbar: {
      hideOnScroll: true,
      title: "EzeXchange.API",
      logo: {
        alt: "ezexchange-logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/guides/getting-started/what-is-ezexchange/",
          label: "Guides",
          position: "left",
        },
        {
          to: "docs/tutorials/getting-started/",
          label: "Tutorials",
          position: "left",
        },
        {
          label: "Dashboard",
          position: "right",
          to: "https://app.ezexchange-api.com",
        },
        {
          label: "Home",
          position: "right",
          to: "https://ezexchange-api.com",
        },
        {
          label: "GitHub",
          position: "right",
          href: "https://github.com/EzeXchange-API",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Main",
          items: [
            {
              label: "Website",
              to: "https://ezexchange-api.com",
            },
            {
              label: "Dashboard",
              to: "https://app.ezexchange-api.com",
            },
          ],
        },
        {
          title: "Docs",
          items: [
            {
              label: "Guides",
              to: "docs/guides/getting-started/what-is-ezexchange/",
            },
            {
              label: "Tutorials",
              to: "docs/tutorials/getting-started/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              to: "https://discord.gg/8QJ2QJX",
            },
            {
              label: "Twitter",
              to: "https://twitter.com/EzeXchangeAPI",
            },
            {
              label: "LinkedIn",
              to: "https://www.linkedin.com/company/ezexchange-api",
            },
            {
              label: "GitHub",
              to: "https://github.com/EzeXchange-API",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EzeXchange-API.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: "dark",
    },
  } satisfies Preset.ThemeConfig,

  themes: [require.resolve("@easyops-cn/docusaurus-search-local")],
};

export default config;
