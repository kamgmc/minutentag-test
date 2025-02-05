import express from "express";
import products from "../data/products.js";

const router = express.Router();

router.get("/", function (req, res) {
  res.json(products);
});

export default router;
