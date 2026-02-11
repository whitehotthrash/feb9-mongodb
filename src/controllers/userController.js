const express = require("express");
const router = express.Router();
const { UserModel } = require("../utils/database/UserEntity");

// login route

// register route

// create route
router.post("/", async (request, response) => {
  console.log("Making a new user!");

  let result = await UserModel.create({ username: request.body.username });

  response.json({
    message: "user create operation complete",
    data: result,
  });
});

// read route
router.get("/:userId", async (request, response) => {
  console.log(
    "someone is trying to view data about the user with the ID of " +
      request.params.userId,
  );

  let result = await UserModel.findById(request.params.userId);
  console.log(result);
  response.json({
    message: "Operation complete",
    params: request.params,
    result: result
  });
});
// update route

// delete route

// unnamed or "default" export
module.exports = router; // the only thing being exported by the file
