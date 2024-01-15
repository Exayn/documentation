---
sidebar_position: 1
---

# Recent klines

**`GET /market/recent-klines`**

**REQUIRE SIGN : Yes**

This endpoint returns the recent klines of the symbol used

| Exchange     | Available |
| ------------ | --------- |
| Binance Spot | ✅        |
| Kraken Spot  | ✅        |
| Gate.IO Spot | ✅        |

## Parameters

| Name     | Type   | Mandatory | Description                                          |
| :------- | :----- | :-------- | :--------------------------------------------------- |
| asset1   | String | YES       | First asset of the symbol. ex : "BTC" of "BTCUSDT"   |
| asset2   | Sting  | YES       | Second asset of the symbol. ex : "USDT" of "BTCUSDT" |
| limit    | Uint   | NO        | Limit of the klines. ex : 100                        |
| interval | String | NO        | Interval of the klines. ex : "1m"                    |

## Request Example

```bash
curl -X POST 'https://api.ezexchange-api.com/v1/market/recent-klines&asset1=BTC&asset2=ETH&signature=xxx' \
-H 'X-API-KEY: <PLACE YOUR PUBLIC KEY>' \
-H 'X-API-EXCHANGE-KEY: <PLACE YOUR EXCHANGE API KEY NAME>' \
-H 'Content-Type: application/json'
```

## Response Example

```json
[
    {
        "openTime": 1623931200000,
        "openPrice": "0.06900000",
        "highPrice": "0.06900000",
        "lowPrice": "0.06900000",
        "closePrice": "0.06900000",
        "volume": "0.00000000",
        "closeTime": 1623931259999,
        "numberOfTrades": 2, // Nullable
    },
    ...
]
```
