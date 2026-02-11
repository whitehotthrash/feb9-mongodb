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
router.patch("/id/:userId", async (request, response) => {
  // find the target user
  let targetUser = await UserModel.findById(request.params.userId);

  // update the target user
  // if (request.body.username == profanity){cancel update}
  // single property method with validation
  targetUser.username = request.body.username;

  // update all properties on data provided in bulk
  //targetUser = {...targetUser, ...request.body}
  await targetUser.save();
  
  // return updated user data
  response.json({
    message:"user update operation complete",
    data: targetUser
  })
  
})

// delete route
router.delete("/id/:userId", async (request, response) => {
  await UserModel.deleteOne({id: request.params.userId});

  let resultAlternateWay = await UserModel.findByIdAndDelete(request.params.userId);

})
// unnamed or "default" export
module.exports = router; // the only thing being exported by the file
