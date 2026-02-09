// create and configure the server

// so it can be exported and used by other tools

const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.json({
    message: "hello world"
  })
})
// unnamed export with alias
// const { router: userRouter } = require("./controllers/userController")

// named export
const userRouter = require("./controllers/userController")
app.use("/users", userRouter)

module.exports = {
  app
}