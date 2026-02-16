const express = require("express");
const { ArticleModel } = require("../utils/database/ArticleEntity");
const router = express.Router();

// get ALL articles in the system
// localhost:3000/articles/
router.get("/", async (request, response) => {
  // find({}) shortcut for getting all data from a collection
  let result = await ArticleModel.find({});  

  response.json({
    message: "All articles retrieved",
    data: result
  })
});


module.exports = router;