# Stock Price API

This project is a simple Express.js API for fetching products stock prices by SKU.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Data Structure](#data-structure)

## Installation

1. Install dependencies using Yarn or npm:
   ```sh
   yarn install
   # or
   npm install
   ```

2. Start the server:
   ```sh
   yarn start
   # or
   npm start
   ```

## Usage

Once the server is running, you can access the API at `http://localhost:3000`.

## API Endpoints

### GET /stock-price/:sku

Fetch the stock price for a given SKU.

- **URL Parameters:**
    - `sku` (number): The SKU of the stock item.

- **Responses:**
    - `200 OK`: Returns a JSON object containing the stock price.
    - `400 Bad Request`: Missing SKU.
    - `404 Not Found`: Stock not found.

Example request:

```sh
curl http://localhost:3000/stock-price/10167
```

Example response:

```json
{
  "stock": 130,
  "price": 2865
}
```

### GET /products

Fetch the list of all products.

- **Responses:**
    - `200 OK`: Returns a JSON array of product objects.

Example request:

```sh
curl http://localhost:3000/products
```

Example response:

```json
[
  {
    "id": 127,
    "brand": "Modelo Especial",
    "image": "/products/modelo-especial.jpeg",
    "style": "Lager",
    "substyle": "Light Lager",
    "abv": "4.4%",
    "origin": "Import",
    "information": "...",
    "skus": [
      {
        "code": "10167",
        "name": "12 - 24oz Cans"
      }
    ]
  }
]
```

## Data Structure

### Products (`data/products.js`)

An array of product objects, each containing:

- `id` (number): The product ID.
- `brand` (string): The brand name.
- `image` (string): The image URL.
- `style` (string): The style of the product.
- `substyle` (string): The substyle of the product.
- `abv` (string): Alcohol by volume.
- `origin` (string): The origin of the product.
- `information` (string): Additional information about the product.
- `skus` (array): An array of SKU objects, each containing:
    - `code` (string): The SKU code.
    - `name` (string): The name of the SKU.

### Stock Prices (`data/stock-price.js`)

An object where each key is a SKU code and the value is an object containing:

- `stock` (number): The stock quantity.
- `price` (number): The price in cents.

