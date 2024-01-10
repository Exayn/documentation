import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  guides: [
    {
      type: "category",
      label: "Getting Started",
      items: ["guides/getting-started"],
      collapsed: false,
    },
  ],
  tutorials: [
    {
      type: "category",
      label: "Getting Started",
      items: ["tutorials/getting-started"],
      collapsed: false,
    },
  ],
};

export default sidebars;
