---
sidebar_position: 4
---

# Recent withdraws

**`GET /wallet/recent-withdraws`**

**REQUIRE SIGN : Yes**

This endpoint returns the recent withdraws of the account used.

| Exchange     | Available |
| ------------ | --------- |
| Binance Spot | ✅        |
| Kraken Spot  | ❌        |
| Gate.IO Spot | ✅        |

## Parameters

| Name  | Type   | Mandatory | Description                                               |
| :---- | :----- | :-------- | :-------------------------------------------------------- |
| asset | String | No        | Filter on asset to fetch the recent withdraws. ex : "BTC" |

## Request Example

```bash
curl -X GET 'https://api.exayn.com/v1/wallet/recent-withdraws?asset=ETH&signature=xxx' \
-H 'X-API-KEY: <PLACE YOUR PUBLIC KEY>' \
-H 'X-API-EXCHANGE-KEY: <PLACE YOUR EXCHANGE API KEY NAME>' \
-H 'Content-Type: application/json'
```

## Response Example

```json
[
  {
    "id": "60c9b4b0a9b3a0004a7f7b7f",
    "amount": 0.1,
    "fees": 0.0001, // Nullable
    "totalAmount": 0.1001,
    "asset": "ETH",
    "status": "completed",
    "toAddress": "0x000000",
    "txId": "0x000000",
    "timestamp": 1623931200000,
    "network": "ETH",
  },
  ...
]
```
