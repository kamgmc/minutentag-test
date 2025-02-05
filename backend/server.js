import express from "express";
import logger from "morgan";
import indexRouter from "./routes/index.js";
import productsRouter from "./routes/products.js";
import normalizePort from "./utils/normalizePort.js";

const server = express();

server.use(logger("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use("/", indexRouter);
server.use("/products", productsRouter);

const port = normalizePort(process.env.PORT || "3000");

server.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
