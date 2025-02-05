import express from "express";
import products from "../data/products.js";
import stockPrice from "../data/stock-price.js";

const router = express.Router();

router.get("/", function (req, res) {
  const productsWithPrice = products.map((product) => {
    const sku = product.skus?.[0]?.code;
    return {
      ...product,
      price: stockPrice[sku]?.price || 0,
    };
  });

  res.json(productsWithPrice);
});

export default router;
