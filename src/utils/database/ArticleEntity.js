const mongoose = require("mongoose");
const { UserModel } = require("./UserEntity");
const { LocalisedContentSchema } = require("./LocalisedContentSchema")

// schemaVariable = new mongoose.Schema(fields, options)
const ArticleSchema = new mongoose.Schema(
  // fields
  {
    title: {
      type: [LocalisedContentSchema], //this spreads out every character for some reason
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    // someUser.id - string version
    // someUser._id - objectID version
    // article has one author
    // users can be author to many articles
    author: {
      type: mongoose.Schema.Types.ObjectId,
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