---
sidebar_position: 1
---

# Sign Requests

Exayn uses a secure authentication mechanism similar to Binance's SIGNED requests. Each request must be accompanied by a signature generated using your secret API key. This ensures the security and authenticity of every API call.

## Which Requests Need to be Signed?

All requests that require authentication must be signed. These include:

- Account balance information
- Every order placement, cancellation, or query
- Every market data query
- Withdraw, deposit, and transfer requests

A annotation will be added to the endpoint's documentation to indicate if it needs to be signed.

## Generating a Signature

1. **Generate your parameters as string**: Concatenate all the request's parameters using `&` as a separator. From `query` for `GET` requests and from `body` for others. Example : `asset1=BTC&asset2=ETH` (can be empty).

2. **Generate the Signature**: Use HMAC SHA256 to hash the query string with your secret key (see how to get a secret key here).

3. **Attach the Signature**: Add the signature in your request. In `query` for `GET` requests and in the `body` for others.

4. **Add the public key**: Add your public key in the `X-API-KEY` header.

## Example

Let's define the following keys for this example :

| Key Part    | Value                                       |
| :---------- | :------------------------------------------ |
| Public Key  | CzDMMq6tnBo7ECyLiCvN4K33N0DiXFW_tMiOq8rfKLc |
| Private Key | ru8nVoVLNuNZ4qASWdmoBSsxzqZmXZFgnj2C5IWPZo0 |

And use those parameters :

| Parameter  | Value |
| :--------- | :---- |
| asset1     | BTC   |
| asset2     | ETH   |
| side       | BUY   |
| quantity   | 0.1   |
| quantityIn | ETH   |

#### 1. Generate your parameters as string :

Concatenate all the request's parameters using `&` as a separator. From `query` for `GET` requests and from `body` for others.

```text
asset1=BTC&asset2=ETH&side=BUY&quantity=0.1&quantityIn=ETH
```

#### 2. Generate the Signature :

Use HMAC SHA256 to hash the query string with your secret key.

```text
HMAC_SHA256("asset1=BTC&asset2=ETH&side=BUY&quantity=0.1&quantityIn=ETH", "ru8nVoVLNuNZ4qASWdmoBSsxzqZmXZFgnj2C5IWPZo0")
```

That give the following result :

```text
49b1556d777c30a907611960e9300ad406f09cefdd820a453306d715c926c2cc
```

#### 3. Attach the Signature :

Add the signature in your request. In `query` for `GET` requests and in the `body` for others.

```text
asset1=BTC&asset2=ETH&side=BUY&quantity=0.1&quantityIn=ETH&signature=49b1556d777c30a907611960e9300ad406f09cefdd820a453306d715c926c2cc
```

#### 4. Add the public key :

Add your public key in the `X-API-KEY` header.

```text
X-API-KEY: CzDMMq6tnBo7ECyLiCvN4K33N0DiXFW_tMiOq8rfKLc
```

#### Final request :

```bash
curl -X POST 'https://api.exayn.com/v1/order/market' \
-H 'X-API-KEY: CzDMMq6tnBo7ECyLiCvN4K33N0DiXFW_tMiOq8rfKLc' \
-H 'X-API-EXCHANGE-KEY: cz-binance-api-key' \
-H 'Content-Type: application/json' \
-d '{
    "asset1": "BTC",
    "asset2": "ETH",
    "side": "BUY",
    "quantity": "0.1",
    "quantityIn": "ETH",
    "signature": "49b1556d777c30a907611960e9300ad406f09cefdd820a453306d715c926c2cc"
}'
```
