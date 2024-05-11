---
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

# What is Exayn ?

Exayn is a simple **Rest API** that makes it easy to **interact with cryptocurrency exchanges**. By **normalizing routes, inputs and outputs** across exchanges, exayn allows you to focus on building your product.

<ThemedImage
alt="Exayn base workflow image"
sources={{
    light: useBaseUrl("/img/exayn-base-workflow-light.webp"),
    dark: useBaseUrl("/img/exayn-base-workflow-dark.webp"),
  }}
/>

## How it works ?

Exayn simply acts as a **proxy** between your application and the exchange you want to trade on. You send your requests and exayn forwards them to the exchange, and then exayn relays the response back to you.

<ThemedImage
alt="Exayn workflow image"
sources={{
    light: useBaseUrl("/img/exayn-work-workflow-light.webp"),
    dark: useBaseUrl("/img/exayn-work-workflow-dark.webp"),
  }}
/>

## Solutions Tailored for Your Needs

We offers **two services** to meet varying user needs:

- Cloud Service
- Self-Hosted Service

### Cloud Service

The Cloud Service of Exayn is a hassle-free solution designed for users who prefer **not** to **manage their own infrastructure**. It's a **fully managed**, hosted service that streamlines the process of connecting to various cryptocurrency exchanges. This service offers key benefits like **rapid setup**, usually within an hour, and it eliminates the complexities of handling server maintenance and updates. Users can focus on their trading strategies and data analysis without worrying about the underlying infrastructure.

### Self-Hosted Service (under development)

The Self-Hosted Service of Exayn is tailored for those who prefer to have **complete control over their infrastructure**. This option allows users to run the Exayn software on their own servers. It's ideal for entities with specific security, compliance, or data handling requirements.
