const mongoose = require("mongoose");
const { UserModel } = required("./UserEntity");

// schemaVariable = new mongoose.Schema(fields, options)
const ArticleSchema = new mongoose.Schema(
  // fields
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      require: true,
    },
    // someUser.id - string version
    // someUser._id - objectID version
    // article has one author
    // users can be author to many articles
    author: {
      type: mongoose.Types.ObjectID,
      ref: "User",
      required: true,
    },
  },
  // options
  {
    timestamps: true,
    // createdAt and updatedAt automatically
    // figure out other options
  },
);

const ArticleModel = mongoose.model("Article", ArticleSchema);

module.exports = {
  ArticleSchema,
  ArticleModel
}