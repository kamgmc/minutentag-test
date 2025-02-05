import express from "express";
import stockPrice from "../data/stock-price.js";

const router = express.Router();

router.get("/stock-price/:sku(\\d+)", function (req, res) {
  const sku = parseInt(req.params.sku);

  if (!sku) {
    return res.status(400).send("Missing SKU");
  }

  const stock = stockPrice[sku];

  if (!stock) {
    return res.status(404).send("Stock not found");
  }

  res.json(stock);
});

export default router;
