---
sidebar_position: 2
---

# Recent deposits

**`GET /wallet/recent-deposits`**

**REQUIRE SIGN : Yes**

This endpoint returns the recent deposits of the account used.

| Exchange     | Available |
| ------------ | --------- |
| Binance Spot | ✅        |
| Kraken Spot  | ❌        |
| Gate.IO Spot | ✅        |

## Parameters

| Name   | Type   | Mandatory | Description                                                    |
| :----- | :----- | :-------- | :------------------------------------------------------------- |
| asset  | String | No        | Filter on asset to fetch the recent withdraws. ex : "BTC"      |
| status | String | No        | Filter on status to fetch the recent withdraws. ex : "pending" |

## Request Example

```bash
curl -X GET 'https://api.exayn.com/v1/wallet/recent-deposits?signature=xxx' \
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
    "asset": "ETH",
    "status": "completed",
    "address": "0x000000",
    "network": "ETH",
    "txId": "0x000000",
    "timestamp": 1623931200000,
  },
  ...
]
```
