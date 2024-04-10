const express = require("express")
const cors = require("cors") //used to run server and client on different ports
const dotenv = require("dotenv").config({ path: __dirname + "/config/.env" })
const productRoutes = require("./routes/productRoutes")
const userRoutes = require("./routes/userRoutes")
const { connectDB } = require("./config/db")

connectDB()
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)

app.listen(port, () => console.log(`Server running on port ${port}`))
