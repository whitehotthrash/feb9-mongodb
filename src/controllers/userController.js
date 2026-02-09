const express = require("express");
const router = express.Router();
const { UserModel } = require("../utils/database/UserEntity");

// login route

// register route

// create route

// read route
router.get("/:userId", async (request, response) => {
  console.log("someone is trying to view data about the user with the ID of " + request?.params?.userId);

  let result = await UserModel.findById(request.params.userId);

  response.json({
    message: "not yet implemented!",
    params: request.params
  })
})
// update route

// delete route

// unnamed or "default" export
module.exports = router; // the only thing being exported by the file