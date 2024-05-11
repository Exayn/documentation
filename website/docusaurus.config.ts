import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Exayn",
  tagline: "Exayn is an universal API for cryptocurrency exchanges",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://exayn.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Exayn", // Usually your GitHub org/user name.
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
          editUrl: "https://github.com/Exayn/documentation/",
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
      title: "Exayn",
      logo: {
        alt: "exayn-logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/guides/getting-started/what-is-exayn/",
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
          to: "https://app.exayn.com",
        },
        {
          label: "Home",
          position: "right",
          to: "https://exayn.com",
        },
        {
          label: "GitHub",
          position: "right",
          href: "https://github.com/Exayn",
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
              to: "https://exayn.com",
            },
            {
              label: "Dashboard",
              to: "https://app.exayn.com",
            },
          ],
        },
        {
          title: "Docs",
          items: [
            {
              label: "Guides",
              to: "docs/guides/getting-started/what-is-exayn/",
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
              to: "https://twitter.com/Exayn",
            },
            {
              label: "LinkedIn",
              to: "https://www.linkedin.com/company/exayn",
            },
            {
              label: "GitHub",
              to: "https://github.com/Exayn",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Exayn.`,
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
