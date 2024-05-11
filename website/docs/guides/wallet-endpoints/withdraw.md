---
sidebar_position: 3
---

# Withdraw

`⚠️ This endpoint is not yet available.`

**`POST /wallet/withdraw`**

**REQUIRE SIGN : Yes**

This endpoint submit a withdraw request.

| Exchange     | Available |
| ------------ | --------- |
| Binance Spot | ❌        |
| Kraken Spot  | ❌        |
| Gate.IO Spot | ❌        |

## Parameters

| Name    | Type    | Mandatory | Description                               |
| :------ | :------ | :-------- | :---------------------------------------- |
| asset   | String  | YES       | Asset to send. ex : "ETH"                 |
| network | String  | YES       | Network to send. ex : "ETH"               |
| address | String  | YES       | Address where you want to send the asset. |
| amount  | Float64 | YES       | Amount you want to withdraw               |
| tag     | String  | No        | Tag (or memo) for network that support it |

## Request Example

```bash
curl -X POST 'https://api.exayn.com/v1/wallet/withdraw' \
-H 'X-API-KEY: <PLACE YOUR PUBLIC KEY>' \
-H 'X-API-EXCHANGE-KEY: <PLACE YOUR EXCHANGE API KEY NAME>' \
-H 'Content-Type: application/json' \
-d '{
  "asset": "ETH",
  "network": "ETH",
  "address": "0x000000",
  "amount": 0.1,
}'
```

## Response Example

```json
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
```
