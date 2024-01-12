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
      collapsed: false,
      label: "Getting Started",
      items: [
        "guides/getting-started/what-is-ezexchange",
        "guides/getting-started/why-ezexchange",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Authentication",
      items: ["guides/auth/sign-requests", "guides/auth/obtain-key-pair"],
    },
    {
      collapsed: true,
      type: "category",
      label: "Market data",
      items: [
        "guides/market-data-endpoints/recent-klines",
        "guides/market-data-endpoints/order-book",
      ],
    },
    {
      collapsed: true,
      type: "category",
      label: "Order",
      items: ["guides/order-endpoints/market-order"],
    },
    {
      collapsed: true,
      type: "category",
      label: "Wallet",
      items: [
        "guides/wallet-endpoints/deposit",
        "guides/wallet-endpoints/recent-deposits",
        "guides/wallet-endpoints/withdraw",
        "guides/wallet-endpoints/recent-withdraws",
        "guides/wallet-endpoints/account-balance",
      ],
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
