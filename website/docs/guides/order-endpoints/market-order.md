---
sidebar_position: 1
---

# Market order

**`GET /order/market`**

**REQUIRE SIGN : Yes**

This endpoint place a market order on the exchange used.

| Exchange     | Available |
| ------------ | --------- |
| Binance Spot | ✅        |
| Kraken Spot  | ✅        |
| Gate.IO Spot | ✅        |

## Parameters

| Name       | Type    | Mandatory | Description                                           |
| :--------- | :------ | :-------- | :---------------------------------------------------- |
| asset1     | String  | YES       | First asset of the symbol. ex : "BTC" of "BTCUSDT"    |
| asset2     | String  | YES       | Second asset of the symbol. ex : "USDT" of "BTCUSDT"  |
| side       | String  | YES       | Side of the order. "BUY" or "SELL"                    |
| quantity   | Float64 | YES       | Quantity of the order. ex : 0.1                       |
| quantityIn | String  | YES       | Quantity in which asset. "**asset1**" or "**asset2**" |

## Request Example

```bash
curl -X POST 'https://api.ezexchange-api.com/v1/order/market' \
-H 'X-API-KEY: <PLACE YOUR PUBLIC KEY>' \
-H 'X-API-EXCHANGE-KEY: <PLACE YOUR EXCHANGE API KEY NAME>' \
-H 'Content-Type: application/json' \
-d '{
    "asset1": "BTC",
    "asset2": "ETH",
    "side": "BUY",
    "quantity": "0.1",
    "quantityIn": "ETH",
    "signature": "xxx"
}'
```

## Response Example

```json
{
  "id": "60c9b4b0a9b3a0004a7f7b7f",
  "asset1": "BTC",
  "asset2": "ETH",
  "status": "PENDING",
  "type": "MARKET",
  "side": "BUY",
  "quantity": 0.1,
  "quantityIn": "ETH",
  "fees": 0.001, // Nullable
  "feesIn": "ETH",
  "openAt": 1623931200000,
  "closeAt": 1623931200000
}
```
