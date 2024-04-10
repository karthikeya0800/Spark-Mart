const { Product } = require("./models/productModel")
const { User } = require("./models/userModel")
const { products } = require("./assets/products")
const { connectDB } = require("./config/db")
const bcrypt = require("bcrypt")
const express = require("express")
const dotenv = require("dotenv").config({ path: __dirname + "/config/.env" })

const app = express()
connectDB()

const reset = async () => {
  try {
    await Product.deleteMany()
    await User.deleteMany()
    await Product.insertMany(products)

    const hash = await bcrypt.hash("1234", 12)
    const newUser = new User({
      username: "karthik",
      password: hash,
    })
    await newUser.save()
    console.log("Data was reset")
    process.exit(1)
  } catch (err) {
    console.log(`Error Occured : ${err}`)
  }
}

reset()
