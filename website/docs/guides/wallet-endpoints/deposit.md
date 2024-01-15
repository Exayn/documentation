---
sidebar_position: 1
---

# Deposit

`⚠️ This endpoint is not yet available.`

**`GET /wallet/deposit`**

**REQUIRE SIGN : Yes**

This endpoint fetch the deposit address of the asset passed.

| Exchange     | Available |
| ------------ | --------- |
| Binance Spot | ❌        |
| Kraken Spot  | ❌        |
| Gate.IO Spot | ❌        |

## Parameters

| Name    | Type    | Mandatory | Description                                      |
| :------ | :------ | :-------- | :----------------------------------------------- |
| asset   | String  | YES       | Asset to fetch the deposit address. ex : "BTC"   |
| network | String  | YES       | Network to fetch the deposit address. ex : "BTC" |
| amount  | Float64 | No        | Amount you want to withdraw                      |

## Request Example

```bash
curl -X GET 'https://api.ezexchange-api.com/v1/wallet/deposit?asset=ETH&network=ETH&signature=xxx' \
-H 'X-API-KEY: <PLACE YOUR PUBLIC KEY>' \
-H 'X-API-EXCHANGE-KEY: <PLACE YOUR EXCHANGE API KEY NAME>' \
-H 'Content-Type: application/json'
```

## Response Example

```json
{
  "asset": "ETH",
  "address": "0x000000",
  "network": "ETH",
  "tag": "memo" // Nullable (Only for networks that support it)
}
```
