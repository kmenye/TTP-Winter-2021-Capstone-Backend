const express = require("express")
const cors = require("cors")
const app = express()

// ensure express uses proper middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// CORS
app.use(cors())

app.get("/", (req, res, next) => {
  res.status(202).json({
    message: "on homepage",
  })
})

app.use("/api", require("./api"))

app.listen(8080, () => {
  console.log("Listening on port 8080. CRUD.")
})
