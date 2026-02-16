const express = require("express");
const { ArticleModel } = require("../utils/database/ArticleEntity");
const { UserModel } = require("../utils/database/UserEntity")
const router = express.Router();

// get ALL articles in the system
// localhost:3000/articles/
router.get("/", async (request, response) => {
  // find({}) shortcut for getting all data from a collection
  let result = await ArticleModel.find({}).populate("author")

  response.json({
    message: "All articles retrieved",
    data: result
  })
});

// localhost:3000/articles/author/brotato
router.get("/author/:authorname", async (request, response) => {
  // 1. find user with matching username
  let foundUser = await UserModel.findOne({username: request.params.authorname});

  // 2. find all articles where author id = found user id
  let foundArticles = await ArticleModel.find({author: foundUser._id});

  // 3. return the results
  response.json({
    message: "Found all articles written by user " + request.params.authorname,
    data: foundArticles 
  })

})

// module.exports = {router: router} - not like this
// default export syntax instead:
module.exports = router;