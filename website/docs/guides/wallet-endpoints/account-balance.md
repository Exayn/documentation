---
sidebar_position: 5
---

# Account balance

**`GET /wallet/account-balance`**

**REQUIRE SIGN : Yes**

This endpoint returns the balance of assets contains by the account used.

| Exchange     | Available |
| ------------ | --------- |
| Binance Spot | ✅        |
| Kraken Spot  | ✅        |
| Gate.IO Spot | ✅        |

## Parameters

No parameters available.

## Request Example

```bash
curl -X GET 'https://api.ezexchange-api.com/v1/wallet/account-balance&signature=xxx' \
-H 'X-API-KEY: <PLACE YOUR PUBLIC KEY>' \
-H 'X-API-EXCHANGE-KEY: <PLACE YOUR EXCHANGE API KEY NAME>' \
-H 'Content-Type: application/json'
```

## Response Example

```json
[
  {
    "asset": "BTC",
    "available": "0.00000000",
    "locked": "0.00000000"
  },
  ...
]
```
