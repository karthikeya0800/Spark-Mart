const express = require("express")
const { Product } = require("../models/productModel")

const router = express.Router()

router.get("/name/:name", async (req, res) => {
  const product = await Product.find({ name: req.params.name })
  res.json(product)
})

router.post("/", async (req, res) => {
  const itemsPerPage = 12
  const { pageNo } = req.body
  const start = itemsPerPage * pageNo - itemsPerPage
  const end = itemsPerPage * pageNo
  const products = await Product.find()
  const visibleProducts = products.slice(start, end)
  res.json(visibleProducts)
})

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id)
  res.json(product)
})

module.exports = router