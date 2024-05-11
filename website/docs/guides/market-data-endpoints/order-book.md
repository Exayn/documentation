---
sidebar_position: 2
---

# Order book

`⚠️ This endpoint is not yet available.`

**`GET /market/order-book`**

**REQUIRE SIGN : Yes**

This endpoint returns order book of the symbol passed.

| Exchange     | Available |
| ------------ | --------- |
| Binance Spot | ❌        |
| Kraken Spot  | ❌        |
| Gate.IO Spot | ❌        |

## Parameters

| Name   | Type   | Mandatory | Description                                          |
| :----- | :----- | :-------- | :--------------------------------------------------- |
| asset1 | String | YES       | First asset of the symbol. ex : "BTC" of "BTCUSDT"   |
| asset2 | Sting  | YES       | Second asset of the symbol. ex : "USDT" of "BTCUSDT" |
| limit  | Uint   | NO        | Limit of the order book. ex : 100                    |

## Request Example

```bash
curl -X GET 'https://api.exayn.com/v1/market/order-book?asset1=BTC&asset2=ETH&signature=xxx' \
-H 'X-API-KEY: <PLACE YOUR PUBLIC KEY>' \
-H 'X-API-EXCHANGE-KEY: <PLACE YOUR EXCHANGE API KEY NAME>' \'
-H 'Content-Type: application/json'
```

## Response Example

```json
{
    "bids": [
        {
            "price": "0.06900000",
            "quantity": "0.00000000",
        },
        ...
    ],
    "asks": [
        {
            "price": "0.06900000",
            "quantity": "0.00000000",
        },
        ...
    ]
}
```
