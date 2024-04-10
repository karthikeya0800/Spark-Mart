const express = require("express")
const { User } = require("../models/userModel")
const bcrypt = require("bcrypt")

const router = express.Router()

router.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username })
  if (!user) {
    res.status(401).json({ message: "user not registered" })
    return
  }
  const isMatching = await bcrypt.compare(req.body.password, user.password)
  if (!isMatching) {
    res.status(401).json({ message: "Password Incorrect" })
    return
  } else {
    res.status(200).json({ message: "User Logged In", id: user._id })
    return
  }
})

router.post("/register", async (req, res) => {
  const user = await User.findOne({ username: req.body.username })
  if (user) {
    res.status(400).json({ message: "Username already exists" })
    return
  }
  if (req.body.password !== req.body.confirmPassword) {
    res.status(400).json({ message: "Passwords did not match" })
    return
  }
  const hash = await bcrypt.hash(req.body.password, 12)
  const newUser = new User({
    username: req.body.username,
    password: hash,
  })
  await newUser.save()
  res.status(201).json({ message: "User Registered Successfully" })
  return
})

router.post("/addToCart", async (req, res) => {
  const user = await User.findById(req.body.userId)
  const isPresentIndex = user.cart.findIndex(
    (obj) => obj._id === req.body.cart._id
  )
  if (isPresentIndex !== -1) {
    let temp = user.cart[isPresentIndex]
    temp.quantity += 1
    user.cart.splice(isPresentIndex, 1)
    user.cart.splice(isPresentIndex, 0, temp)
  } else {
    req.body.cart.quantity = 1
    user.cart.push(req.body.cart)
  }
  await user.save()
  res.status(201).json({ message: "Product Added to cart", cart: user.cart })
})

router.post("/removeFromCart", async (req, res) => {
  const user = await User.findById(req.body.userId)
  const isPresentIndex = user.cart.findIndex(
    (obj) => obj._id === req.body.cart._id
  )
  let temp = user.cart[isPresentIndex]
  temp.quantity -= 1
  user.cart.splice(isPresentIndex, 1)
  if (temp.quantity !== 0) {
    user.cart.splice(isPresentIndex, 0, temp)
  }

  await user.save()
  res
    .status(201)
    .json({ message: "Product Removed from cart", cart: user.cart })
})

router.post("/removeFromOrders", async (req, res) => {
  const user = await User.findById(req.body.userId)
  user.orders = []
  await user.save()
  res.status(201).json({ message: "Products Removed from Orders" })
})

router.post("/addToOrders", async (req, res) => {
  const currentDate = new Date()

  // Options for formatting the date and time
  const options = {
    timeZone: "Asia/Kolkata", // Set the time zone to Indian Standard Time (IST)
    timeZoneName: "short", // Display the time zone abbreviation
    weekday: "long", // Display the full weekday name
    year: "numeric", // Display the full year
    month: "long", // Display the full month name
    day: "numeric", // Display the numeric day of the month
    hour: "2-digit", // Display the hour in 24-hour format
    minute: "2-digit", // Display the minute
    second: "2-digit", // Display the second
  }

  // Format the date and time in IST
  const currentDateTimeIST = currentDate.toLocaleString("en-IN", options)

  const user = await User.findById(req.body.userId)
  const tempOrders = req.body.cart.map((obj) => { 
    obj.date = currentDateTimeIST
    return obj
  })
  Array.prototype.push.apply(user.orders, tempOrders)
  user.cart = []
  await user.save()
  res.status(201).json({ message: "Order Placed Successfully" })
})

router.get("/myorders/:id", async (req, res) => {
  const user = await User.findById(req.params.id)
  res.json({ orders: user.orders })
})

module.exports = router
