const express = require("express")
const app = express()
require("dotenv").config()

const userRoutes = require("./routes/users")
const blogRoutes = require("./routes/blogs")

const port = process.env.PORT || 3030

app.use(express.json())

app.use("/user", userRoutes)
app.use("/blog", blogRoutes)

app.listen(port, () => console.log("SERVER ON " + port))
