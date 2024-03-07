import express from "express";
import path from "path";
import { getDatos, __dirname } from "../utils.js";

const router = express.Router();
router.use(express.static(path.join(__dirname, "public")));

router.get("/public/assets/styles.css", (req, res) => {
  res.sendFile(path.join(__dirname, "public/assets/styles.css"), {
    headers: {
      "Content-Type": "text/css",
    },
  });
});

router.get("/", (req, res) => {
  const productsFilePath = path.join(__dirname, "/data/products.json");
  const products = getDatos(productsFilePath);
  res.render("home", { products });
});

export { router };
